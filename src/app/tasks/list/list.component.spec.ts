import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { Task } from '../../shared/task';
import { ListComponent } from './list.component';
import { ItemComponent } from '../item/item.component';
import { TaskService } from '../../shared/task-service';
import { ShortenPipe } from '../../shared/shorten-pipe';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListComponent,
        ItemComponent,
        ShortenPipe
      ],
      imports: [
        FormsModule,
        MaterialModule
      ],
      providers: [
        TaskService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
