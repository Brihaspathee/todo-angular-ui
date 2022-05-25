import { Component, OnInit } from '@angular/core';
import {HarcodedAuthenticationService} from "../services/harcoded-authentication.service";

@Component({
  selector: 'todo-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hcAuthService: HarcodedAuthenticationService) { }

  ngOnInit(): void {
    this.hcAuthService.logout();
  }

}
