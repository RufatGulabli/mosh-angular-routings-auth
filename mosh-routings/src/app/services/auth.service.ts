import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, switchMap, map } from "rxjs/operators";
import { throwError, Observable, of } from "rxjs";
import { User } from "../models/User";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(value: any): Observable<boolean> {
    return this.http.post<User>("http://localhost:3002/login", value).pipe(
      map((obj: any) => {
        if (obj && obj.token) {
          localStorage.setItem("token", obj.token);
          return true;
        }
        return false;
      }),
      catchError(this.errorHandler)
    );
  }

  get currentUser(): User | null {
    let token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    return new JwtHelperService().decodeToken(token) as User;
  }

  // token(): User | null {
  //   let token = localStorage.getItem("token");
  //   let jwtToken = new JwtHelperService();
  //   if (token) {
  //     let isExpired = jwtToken.isTokenExpired(token);
  //     let expiredDate = jwtToken.getTokenExpirationDate(token);
  //     console.log("isExpired : ", isExpired);
  //     console.log("expiredDate : ", expiredDate);
  //     return jwtToken.decodeToken(token) as User;
  //   }
  //   return null;
  // }

  isLoggedIn(): boolean {
    return this.currentUser !== null ? true : false;
  }

  isAdmin(): boolean {
    return this.currentUser !== null ? this.currentUser.isAdmin : false;
  }

  logOut() {
    localStorage.removeItem("token");
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
