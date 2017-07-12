import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../../shared/task-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() tasks: string[];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.findAll();
  }

  ngOnInit() {
  }

}
