import { Component, OnInit } from '@angular/core';
import {HarcodedAuthenticationService} from "../services/harcoded-authentication.service";

@Component({
  selector: 'todo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(public hcAuth: HarcodedAuthenticationService) { }

  ngOnInit(): void {
  }

}
