import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskService } from './shared/task-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './tasks/form/form.component';
import { ListComponent } from './tasks/list/list.component';
import { ItemComponent } from './tasks/item/item.component';

import { ShortenPipe } from './shared/shorten-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ListComponent,
    ItemComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
