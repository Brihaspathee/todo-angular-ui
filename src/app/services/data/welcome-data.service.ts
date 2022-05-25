import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Hello} from "../../model/hello.model";
import {API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    console.log("getting hello world service")
    return this.http.get<Hello>(`${API_URL}/hello`);
  }

  executeHelloWorldServiceWithPathVariable(name: string){
    // let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    // let welcomeAuthHeader = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   });
    return this.http.get<Hello>(`${API_URL}/hello/${name}`);
      // {headers : welcomeAuthHeader});
  }

  // createBasicAuthHttpHeader(){
  //   let username = 'in28minutes';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
