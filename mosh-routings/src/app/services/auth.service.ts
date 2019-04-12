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
    return this.http.post<User>("http://localhost:3001/login", value).pipe(
      map((obj: any) => {
        if (obj.token) {
          localStorage.setItem("token", obj.token);
          return true;
        }
        return false;
      }),
      catchError(this.errorHandler)
    );
  }

  token(): User {
    let token = localStorage.getItem("token");
    let jwt = new JwtHelperService();
    return jwt.decodeToken(token) as User;
  }

  isLoggedIn() {
    let token = this.token();
    if (token) {
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    return this.token().isAdmin;
  }

  logOut() {
    localStorage.removeItem("token");
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
