import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { TodoList } from '../../interfaces/todo-list';
import { TodoListService } from '../../services/todo-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="todo-header">
    <span class="todo-close" (click)="removeList()">&times;</span>
    <h2>{{list.title}}</h2>
  </div>

  `,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: TodoList;
  @Output() remove: EventEmitter<TodoList> = new EventEmitter<TodoList>()
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }
  removeList() {
    this.remove.emit(this.list)

  }
  completeList() {
    console.log
    this.update.emit({
      list: this.list
    })
  }
}