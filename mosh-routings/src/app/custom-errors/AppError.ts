import { GlobalErrorHandler } from "./GlobalErrorHandler";

export class AppError {
  private _status: string;
  private _message: string;

  constructor(public originalError?: any) {
    this._status = originalError.status;
    this._message = originalError.message;
  }

  get status() {
    return this._status;
  }

  get message() {
    return this._message;
  }
}
