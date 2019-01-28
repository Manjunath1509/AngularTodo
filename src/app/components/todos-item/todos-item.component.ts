import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../todo";
import { TodoService } from "../../services/todo.service";
@Component({
  selector: "app-todos-item",
  templateUrl: "./todos-item.component.html",
  styleUrls: ["./todos-item.component.css"]
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) {}

  ngOnInit() {}
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };
    return classes;
  }

  onChange(todo) {
    //toggle on ul
    this.todo.completed = !this.todo.completed;
    //toggel on server
    this.todoService.toggleCompleted(todo).subscribe(tod => {
      console.log(tod);
    });
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
