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
    if (this.task.isChangeTitle(title)) {
      this.taskService.update(this.task.key, this.task.changeTitle(title));
    }
    this.stopEditing();
  }

  stopEditing() {
    this.editing = false;
    this.title = '';
  }

  remove(task) {
    this.taskService.remove(task.key);
  }

  toggleStatus() {
    this.taskService.update(this.task.key, this.task.changeCompleted());
  }
}
