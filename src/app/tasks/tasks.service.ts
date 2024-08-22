import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

// @Injectable({
//   providedIn: 'root',
// })
export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      id: Math.random().toString(),
      title: taskData.title,
      description: taskData.description,
      status: 'OPEN',
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  updateTaskStatus(taskId: string, newStatus: Task['status']) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  getTasks() {
    return this.tasks;
  }
}
