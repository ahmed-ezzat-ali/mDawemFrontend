import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from '../common/common.service';


const AUTH_URLS = ['/posts', '/url2'];

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    constructor(private snackBar: MatSnackBar, public commonService: CommonService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req.clone({
            url: req.url.startsWith('/') ? `${environment.base_url}/${req.url}` : req.url,
            setHeaders: {
                'Content-type': 'application/json; charset=UTF-8',
                access_token: '123456'
            }
        });



        return new Observable((observer) => {
            next.handle(authReq).subscribe(
                (res: HttpResponse<any>) => {
                    if (res instanceof HttpResponse) {
                        observer.next(res);
                    }
                }, (err: HttpErrorResponse) => {

                    let errorMessage = '';
                    switch (err.status) {
                        case 400:
                            errorMessage = `${err.status}: Bad Request.`;
                            break;

                        case 401:
                            errorMessage = `${err.status}: Not Authorized.`;
                            break;

                        case 403:
                            errorMessage = `${err.status}: You don't have permission.`;
                            break;

                        case 404:
                            errorMessage = `${err.status}: Not found.`;
                            break;

                        case 412:
                            errorMessage = `${err.status}: Precondition failed.`;
                            break;

                        case 500:
                            errorMessage = `${err.status}: Internal Server Error: ${err.error.error.message}`;
                            break;

                        case 503:
                            errorMessage = `${err.status}: The requested service is not available.`;
                            break;

                        default:
                            errorMessage = 'Something went wrong.';
                    }
                    this.showErrorMessageInSnackBar(errorMessage);

                    this.commonService.hideLoading();
                }
            );
        });


    }

    showErrorMessageInSnackBar(message): void {
        this.snackBar.open(message, null,
            {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',

            });
    }
}
