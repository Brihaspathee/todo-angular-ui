import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../services/data/todo-data.service";
import {Todo} from "../model/todo.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id !: number;
  todo !: Todo;

  constructor(private todoService: TodoDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if(this.id != -1){
      this.todoService.retrieve('in28minutes', this.id.toString()).subscribe({
        next: value => {
          // @ts-ignore
          this.todo = value;
        }
      });
    }

  }

  saveTodo(){
    if(this.id === -1){
      // create a new todo
    }else {
      this.todoService.updateTodo('in28minutes', this.id.toString(),this.todo).subscribe({
        next: value => {
          console.log(value);
          this.router.navigate(['todos']);
        }
      });
    }
  }

}
