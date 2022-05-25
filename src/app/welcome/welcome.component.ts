import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {WelcomeDataService} from "../services/data/welcome-data.service";
import {Hello} from "../model/hello.model";

@Component({
  selector: 'todo-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username !: string;
  welcomeMessage !: string;
  errorMessage !: string;

  constructor(private activeRoute: ActivatedRoute,
              private welcomeService: WelcomeDataService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.username = params['name'];
      }
    );
  }

  getWelComeMessage(){
    console.log(this.welcomeService.executeHelloWorldBeanService().subscribe(
      data => {
        this.handleSuccessfulResponse(data);
      },
      error => {
        this.handleErrorResponse(error);
      }
    ));
    console.log("last line of welcome message");
  }

  getWelComeMessageWithParameter(){
    console.log(this.welcomeService.executeHelloWorldServiceWithPathVariable(this.username).subscribe(
      data => {
        this.handleSuccessfulResponse(data);
      },
      error => {
        this.handleErrorResponse(error);
      }
    ));
    console.log("last line of welcome message");
  }

  handleSuccessfulResponse(response: Hello){
    this.welcomeMessage = response.name
  }

  handleErrorResponse(error: any){
    this.errorMessage = error.error.message;
  }

}
