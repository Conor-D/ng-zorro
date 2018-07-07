import { ErrorHandler } from '@angular/core';
export class ErrorHandlerImpl implements ErrorHandler {
  handleError(error) {
    console.log(error);
  }
}
