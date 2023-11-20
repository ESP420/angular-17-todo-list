import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputButtonUnitComponent, TodoItemComponent],
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  todoList!: TodoItem[]
  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }

  ngOnInit(): void {
  }

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}