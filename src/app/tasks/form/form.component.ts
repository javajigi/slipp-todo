import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  template: `
    <md-card-content class="todo-input">
      <md-input-container class="full-width">
          <form class="task-form" (ngSubmit)="submit()">
            <input 
              [(ngModel)]="title"
              name="title"
              type="text"
              mdInput placeholder="What needs to be done?"/>
          </form>
      </md-input-container>
    </md-card-content>
  `
  ,
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = '';

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    const title = this.title.trim();
    console.log('title', title);
  }
}
