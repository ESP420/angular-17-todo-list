import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { TodoList } from '../interfaces/todo-list';

const todoListStorageKey = 'Todos_List';

const defaultTodoList: TodoItem[] = [
];
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: TodoList[];
  constructor(private storageService: StorageService) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }
  public getTodoList(): Array<TodoList> {
    return this.todoList;
  }
  public addTodoList(title: string): void {
    let todoItems: TodoItem[] = [];
    this.todoList.push({ title, todoItems });
    this.saveTodoList()
  }
  public updateTodoList(item: TodoList, changes: TodoList): void {
    const index = this.todoList.indexOf(item);
    /* using spread operation:
    - new oject is constructed.
    - overridden the similar keys of index whit the values of changes 
    - adding new key if not exist in item */
    this.todoList[index] = { ...item, ...changes }
    this.saveTodoList()
  }
  public deleteTodoList(item): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveTodoList()
  }

  addItem(list, title: string): void {
    const indexList = this.todoList.indexOf(list);
    this.todoList[indexList].todoItems.push({ title });
    this.saveTodoList()
  }
  public updateItem(list: TodoList, item: TodoItem, changes: TodoItem): void {
    const indexList = this.todoList.indexOf(list);
    const indexItem = this.todoList[indexList].todoItems.indexOf(item);
    /* using spread operation:
    - new oject is constructed.
    - overridden the similar keys of index whit the values of changes 
    - adding new key if not exist in item */
    this.todoList[indexList].todoItems[indexItem] = { ...item, ...changes };
    this.saveTodoList()
  }
  public deleteItem(list, item): void {
    const indexList = this.todoList.indexOf(list);
    const indexItem = this.todoList[indexList].todoItems.indexOf(item);
    this.todoList[indexList].todoItems.splice(indexItem, 1);
    this.saveTodoList()
  }


  private saveTodoList(): void {
    this.storageService.setDate(todoListStorageKey, this.todoList);
  }

}
