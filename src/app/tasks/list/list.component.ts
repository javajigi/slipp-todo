import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../shared/task';
import { TaskService } from '../../shared/task-service';

@Component({
  selector: 'app-list',
  template: `
    <md-list>
      <form>
        <app-item [task]="task" *ngFor="let task of tasks | async"></app-item>
      </form>
    </md-list>
  `
})
export class ListComponent implements OnInit {
  tasks: Observable<any[]>;

  constructor(private taskService: TaskService) {
    this.tasks = taskService.findAll();
  }

  ngOnInit() {
  }

}
