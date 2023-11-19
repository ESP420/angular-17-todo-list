import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';
import { ListManagerComponent } from './shared/list-manager/list-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListManagerComponent],
  template: `
  <h1>
    Welcome to {{ title }}!
  </h1>
  <app-list-manager></app-list-manager>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My To Do List APP';
}
