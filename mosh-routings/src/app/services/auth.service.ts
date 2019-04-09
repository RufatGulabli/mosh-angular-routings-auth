import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, switchMap, map } from "rxjs/operators";
import { throwError, Observable, of } from "rxjs";
import { User } from "../models/User";

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

  isLoggedIn() {
    let token = localStorage.getItem("token");
    // let jwt = new JwtHelper();
    // let user = jwt.decodeToken(token);
    // console.log("User => ", user);
    if (token) {
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem("token");
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
