import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoListService } from '../../services/todo-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="todo-item">
    <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"
         [checked]="item.completed"/>
         <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  {{ item.title }}
</span>
  <button class="btn-red" (click)="removeItem()">
  Remove
</button>
</div>

  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }
  removeItem() {
    this.remove.emit(this.item)

  }
  completeItem() {
    console.log
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    })
  }
}