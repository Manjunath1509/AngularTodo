import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../todo";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosURL = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) {}
  limit = "?_limit=5";

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.limit}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  deleteTodo(todo: Todo) {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }
}
