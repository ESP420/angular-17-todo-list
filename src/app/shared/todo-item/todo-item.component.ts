import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}