import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const ErrorResponseInterceptor: HttpInterceptorFn = (request, next) => 
    next(request).pipe(catchError(handleErrorResponse));

function handleErrorResponse(error: HttpErrorResponse) {
    console.log('Error App: ', error);
    const errorResponse = `Status: ${error.status}, Message: ${error.message}`;
    return throwError(()=> errorResponse);
}