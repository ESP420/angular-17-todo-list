import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoList } from '../../interfaces/todo-list';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputButtonUnitComponent, TodoItemComponent, TodoListComponent],
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  todoList!: TodoList[]
  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
    console.log(this.todoList)
  }

  ngOnInit(): void {
  }

  addTodoList(title: string): void {
    this.todoListService.addTodoList(title)
  }
  removeTodoList(todoList): void {
    this.todoListService.deleteTodoList(todoList)
  }
  updateTodoList(todoList: TodoList, changes: TodoList) {
    this.todoListService.updateTodoList(todoList, changes);
  }
  addItem(list: TodoList, title: string): void {
    this.todoListService.addItem(list, title)
  }
  removeItem(list: TodoList, item: TodoItem): void {
    this.todoListService.deleteItem(list, item)
  }
  updateItem(list: TodoList, item: TodoItem, changes: TodoItem) {
    this.todoListService.updateItem(list, item, changes);
  }
}