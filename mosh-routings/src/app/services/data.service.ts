import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BadInput } from "../custom-errors/BadInput";
import { AppError } from "../custom-errors/AppError";
import { NotFoundError } from "../custom-errors/NotFoundError";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      // map(response => response),
      catchError(this.errorHandler)
    );
  }

  create(post: any): Observable<any> {
    // return throwError(new GlobalErrorHandler());
    return this.http
      .post<any>(this.url, JSON.stringify(post))
      .pipe(catchError(this.errorHandler));
  }

  delete(id: any) {
    return this.http
      .delete(this.url.concat("/" + id))
      .pipe(catchError(this.errorHandler));
  }

  update(todo: any): Observable<any> {
    return this.http
      .put<any>(
        this.url.concat("/".concat(todo.id.toString())),
        JSON.stringify(todo)
      )
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    return throwError(new AppError(error));
  }
}
