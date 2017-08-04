import { Injectable } from '@angular/core';

import { Task } from './task';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  add(task: Task): void {
    this.tasks.push(task);
  }

  remove(task: Task): void {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  findAll(): Task[] {
    return this.tasks;
  }
}
