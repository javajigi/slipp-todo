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

  editing = false;
  title = '';

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  editTitle() {
    this.editing = true;
    this.title = this.task.title;
  }

  saveTitle() {
    const title = this.title.trim();
    if (title.length && title !== this.task.title) {
      this.taskService.update(this.task, title);
    }
    this.stopEditing();
  }

  stopEditing() {
    this.editing = false;
    this.title = '';
  }

  remove(task) {
    this.taskService.remove(task);
  }

  toggleStatus(task) {
    this.task.completed = this.task.completed ? false : true;
  }
}
