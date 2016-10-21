import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { FoodNewComponent }   from './food-new.component';
import { FoodListComponent }   from './food-list.component';
import { FoodEditComponent }   from './food-edit.component';
import { CaloriesPipe } from './calories.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodNewComponent,
    FoodListComponent,
    FoodEditComponent,
    CaloriesPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
