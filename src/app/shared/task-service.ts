import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Task } from './task';

@Injectable()
export class TaskService {
  private tasks: AngularFireList<Task>;

  constructor(private db: AngularFireDatabase) {
    this.tasks = db.list('/tasks');
  }

  add(task: Task): void {
    this.tasks.push(task);
  }

  remove(key: string): void {
    this.tasks.remove(key);
  }

  update(key: string, task: Task): void {
    this.tasks.update(key, task);
  }

  findAll(): Observable<any[]> {
    return this.tasks.snapshotChanges().map(changes => {
      return changes.map(c => ({ 
        key: c.payload.key, 
        ...c.payload.val() }))
        .map(v => Object.assign(new Task(), v));
    });
  }
}
