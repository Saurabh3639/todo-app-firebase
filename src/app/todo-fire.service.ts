import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TodoFireService {

  constructor(private db: AngularFireDatabase) { }

  getAllTodos() {
    return this.db.database.ref().child("Todos").get();
  }

  insertNewTodo(todo: Todo) {
    let id = this.db.database.ref().child("Todos").push().key;
    todo.id = id!;
    return this.db.database.ref().child("Todos").child(id!).set(todo);
  }

  updateTodo(newValue: string, id: string) {
    return this.db.database.ref().child("Todos").child(id).update({
      title: newValue
    })
  }

  deleteTodo(id: string) {
    return this.db.database.ref().child("Todos").child(id).remove();
  }

}
