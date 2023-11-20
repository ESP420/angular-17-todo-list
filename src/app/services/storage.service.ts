import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public getData(key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
  public setDate(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
