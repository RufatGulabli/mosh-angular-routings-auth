import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, switchMap, map } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(value: any): Observable<User> {
    return this.http
      .post<User>("http//localhost:3001/login", value)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
