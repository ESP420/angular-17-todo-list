import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TodoListService } from './services/todo-list.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), TodoListService]
};
