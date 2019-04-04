import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log(error);
    alert("Unexpected Error Happened");
    // Log the errorto the server
  }
}
