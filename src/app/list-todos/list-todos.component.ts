import { Component, OnInit } from '@angular/core';
import {Todo} from "../model/todo.model";
import {TodoDataService} from "../services/data/todo-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'todo-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos !: Todo[];
  successDeleteMessage : string = ''

  constructor(private todoService: TodoDataService,
              private router: Router) { }

  ngOnInit(): void {

    this.refreshTodos();
  }

  deleteTodo(id: number){
    console.log("delete todo:", id)
    this.todoService.deleteTodo('in28minutes', id.toString()).subscribe({
      next:response => {
        this.successDeleteMessage = 'Todo successfully deleted';
        console.log(response);
      }
    });
    this.refreshTodos();
  }

  updateTodo(id: number){
    console.log("update todo:", id)
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('balaji').subscribe(
      response => {
        console.log(response);
        this.todos = response
      }
    );
  }

}
