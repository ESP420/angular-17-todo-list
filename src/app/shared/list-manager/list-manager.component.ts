import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoList } from '../../interfaces/todo-list';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputButtonUnitComponent, TodoItemComponent],
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
}