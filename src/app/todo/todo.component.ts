import { Todo } from './../todo.model';
import { TodoFireService } from './../todo-fire.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoArray: Todo[] = [];
  title = '';

  constructor(private service: TodoFireService) {
    this.fetchTodos();
  }

  fetchTodos() {
    this.service
      .getAllTodos()
      .then((snap) => {
        this.todoArray = [];
        snap.forEach((element) => {
          this.todoArray.push(element.val());
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  save() {
    let todo = new Todo();
    todo.title = this.title;
    if (this.title == '' || this.title == undefined) {
      alert('Please Enter Some Text...');
    } else {
      this.service
        .insertNewTodo(todo)
        .then((data) => {
          this.fetchTodos();
          this.title = '';
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  edit(todo: Todo) {
    let newValue = prompt('Do you want to change?', todo.title);
    if (newValue != '' || newValue != undefined) {
      this.service
        .updateTodo(newValue!, todo.id)
        .then((data) => {
          this.fetchTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  delete(id: string) {
    this.service
      .deleteTodo(id)
      .then((data) => {
        this.fetchTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
