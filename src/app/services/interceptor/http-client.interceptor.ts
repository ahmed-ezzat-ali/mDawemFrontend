import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_URLS = ['/posts','/url2'];

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var headers;
        AUTH_URLS.forEach(URL =>{
            if(req.url.indexOf(URL) > -1){
                headers = req.headers.set("Content-type",'application/json; charset=UTF-8');
                headers = req.headers.set("access_token",'123456');
            }
        });
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}
