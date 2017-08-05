import { Injectable } from '@angular/core';

import { Task } from './task';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  add(task: Task): void {
    this.tasks.push(task);
    console.log(task);
  }

  remove(task: Task): void {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  update(task: Task, title: string): void {
    task.changeTitle(title);
  }

  findAll(): Task[] {
    return this.tasks;
  }
}
