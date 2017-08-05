import { TestBed, async } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { TaskService } from './shared/task-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './tasks/form/form.component';
import { ListComponent } from './tasks/list/list.component';
import { ItemComponent } from './tasks/item/item.component';

import { ShortenPipe } from './shared/shorten-pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FormComponent,
        ListComponent,
        ItemComponent,
        ShortenPipe
      ],
      imports: [
        FormsModule,
        HttpModule,
        MaterialModule
      ],
      providers: [
        TaskService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
