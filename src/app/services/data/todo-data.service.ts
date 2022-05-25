import { Injectable } from '@angular/core';
import {Hello} from "../../model/hello.model";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../model/todo.model";
import {API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string){
    console.log("getting the list of todos")
    return this.http.get<Todo[]>(`${API_URL}/todos/users/balaji`);
  }

  deleteTodo(username: string, id:string){
    return this.http.delete(`${API_URL}/todos/users/${username}/todos/${id}`)
  }

  retrieve(username: string, id:string){
    return this.http.get<Todo>(`${API_URL}/todos/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id:string, todo:Todo){
    return this.http.put(
      `${API_URL}/todos/users/${username}/todos/${id}`,
      todo);
  }

  createTodo(username: string, todo:Todo){
    return this.http.post(
      `${API_URL}/todos/users/${username}/todos`,
      todo);
  }
}
