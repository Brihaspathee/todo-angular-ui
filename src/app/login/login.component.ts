import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HarcodedAuthenticationService} from "../services/harcoded-authentication.service";
import {BasicAuthenticationService} from "../services/basic-authentication.service";

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              // private hcAuth: HarcodedAuthenticationService,
              private basicAuth: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username);
    // if(this.hcAuth.executeAuthenticationService(this.username, this.password)){
    //   this.invalidLogin = false;
    //   this.router.navigate(['welcome', this.username] )
    // }else{
    //   this.invalidLogin = true;
    // }

    this.basicAuth.executeAuthenticationService(this.username, this.password).subscribe({
        next: auth=>{
          console.log("Auth value:", auth)
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error: err => {
          console.log("Auth error:", err);
          this.invalidLogin = true;
        },
        complete: () => {}
      }
    );
  }

  handleJWTLogin(){
    console.log(this.username);
    // if(this.hcAuth.executeAuthenticationService(this.username, this.password)){
    //   this.invalidLogin = false;
    //   this.router.navigate(['welcome', this.username] )
    // }else{
    //   this.invalidLogin = true;
    // }

    this.basicAuth.executeJWTAuthenticationService(this.username, this.password).subscribe({
        next: auth=>{
          console.log("Auth value:", auth)
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error: err => {
          console.log("Auth error:", err);
          this.invalidLogin = true;
        },
        complete: () => {}
      }
    );
  }

}
