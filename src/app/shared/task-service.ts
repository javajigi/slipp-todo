import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  private tasks: string[] = [];

  add(title: string): void {
    this.tasks.push(title);
  }

  findAll(): string[] {
    return this.tasks;
  }
}
