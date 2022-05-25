import { Injectable } from '@angular/core';
import {Hello} from "../model/hello.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Authentication} from "../model/authentication.model";
import {map} from "rxjs";
import {API_URL} from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username: string, password: string){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let welcomeAuthHeader = new HttpHeaders({
        Authorization: basicAuthHeaderString
      });
    return this.http.get<Authentication>(`${API_URL}/basicauth`, {headers : welcomeAuthHeader}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('authToken', basicAuthHeaderString);
          return data;
        }
      )
    );
    // {headers : welcomeAuthHeader});
  }

  executeJWTAuthenticationService(username: string, password: string){

    return this.http.post<Authentication>(`${API_URL}/authenticate`, {
      "username": username,
      "password": password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          // @ts-ignore
          sessionStorage.setItem('authToken', `Bearer ${data.token}`);
          return data;
        }
      )
    );
    // {headers : welcomeAuthHeader});
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('authToken');
    }else{
      return null;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('authToken');
  }



}
