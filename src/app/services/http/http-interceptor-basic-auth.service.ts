import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticationService} from "../basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private authService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let username = 'in28minutes';
    // let password = 'dummy';
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();
    if(basicAuthHeaderString && username){
      req = req.clone({
        setHeaders:{
          Authorization:basicAuthHeaderString
        }
      });
    }
    return next.handle(req);
  }
}
