import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../shared/task';
import { TaskService } from '../../shared/task-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  remove(task) {
    this.taskService.remove(task);
  }

  toggleStatus(task) {
    this.task.completed = this.task.completed ? false : true;
  }
}
