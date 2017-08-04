import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../../shared/task-service';

@Component({
  selector: 'app-list',
  template: `
    <md-list>
      <form>
        <app-item [task]="task" *ngFor="let task of tasks"></app-item>
      </form>
    </md-list>
  `
})
export class ListComponent implements OnInit {
  @Input() tasks: string[];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.findAll();
  }

  ngOnInit() {
  }

}
