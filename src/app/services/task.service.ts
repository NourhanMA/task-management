import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task>(`${this.baseUrl}/tasks`);
  }

  addTask(task: Task) {
    return this.http.post(`${this.baseUrl}/tasks`, task);
  }
}
