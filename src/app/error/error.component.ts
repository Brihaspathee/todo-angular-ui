import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An error occured!!! Contact support'

  constructor() { }

  ngOnInit(): void {
  }

}
