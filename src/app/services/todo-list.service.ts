import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: TodoItem[];
  constructor(private storageService: StorageService) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }
  public getTodoList(): Array<TodoItem> {
    return this.todoList;;
  }
  public addItem(title: string): void {
    this.todoList.push({ title });
    this.saveList()
  }
  public updateItem(item: TodoItem, changes: TodoItem): void {
    const index = this.todoList.indexOf(item);
    /* using spread operation:
    - new oject is constructed.
    - overridden the similar keys of index whit the values of changes 
    - adding new key if not exist in item */
    this.todoList[index] = { ...item, ...changes }
    this.saveList()
  }
  public deleteItem(item): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList()
  }


  private saveList(): void {
    this.storageService.setDate(todoListStorageKey, this.todoList);
  }
}
