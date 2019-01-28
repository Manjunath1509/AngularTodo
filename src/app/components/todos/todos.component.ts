import { Component, OnInit } from "@angular/core";
import { Todo } from "../../todo";
import { TodoService } from "../../services/todo.service";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todo => {
      this.todos = todo;
    });
  }
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => {
      return t.id !== todo.id;
    });
    this.todoService.deleteTodo(todo).subscribe(item => {
      console.log(item, todo);
      console.log(this.todos);
    });
  }
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(tod => {
      this.todos.unshift(tod);
      console.log(todo);
    });
  }
}
