import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { FoodNewComponent }   from './food-new.component';
import { FoodEditComponent }   from './food-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodNewComponent,
    FoodEditComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
