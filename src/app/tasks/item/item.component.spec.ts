import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { ItemComponent } from './item.component';
import { ShortenPipe } from '../../shared/shorten-pipe';

import { Task } from '../../shared/task';
import { TaskService } from '../../shared/task-service';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.task = new Task('나의 할일');
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
