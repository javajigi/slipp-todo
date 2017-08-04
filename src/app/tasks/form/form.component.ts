import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../shared/task';
import { TaskService } from '../../shared/task-service';

@Component({
  selector: 'app-task-form',
  template: `
    <md-input-container class="todo-input full-width">
        <form class="task-form" (ngSubmit)="submit()">
          <input 
            [(ngModel)]="title"
            name="title"
            type="text"
            mdInput placeholder="What needs to be done?"/>
        </form>
    </md-input-container>
  `
  ,
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() title = '';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  submit(): void {
    const title = this.title.trim();
    this.taskService.add(new Task(title));
    this.title = '';
  }
}
