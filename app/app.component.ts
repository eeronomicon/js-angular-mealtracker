import { Component } from '@angular/core';
import { Food } from './food.model';
declare var moment: any;

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Curious Canines' Calorie Counter*</h1>
    <p>* No, this isn't an app to track what your furry friends eat; it's more the other way around! ;)</p>
    <hr>
    <h3>{{ nao }}</h3>
    <hr>
    <div class="row">
      <div class="col-xs-4 cccc_image">
        <img src="/resources/images/cccc.jpg" class="cccc_image">
      </div>
      <div class="col-xs-8">
        <food-new  *ngIf="!selectedFoodItem"
          (newFoodSender)="addFoodItem($event)"
        ></food-new>
        <food-edit *ngIf="selectedFoodItem"
          [selectedFoodItem]="selectedFoodItem"
          (doneEditFoodItemSender)="editFoodItemComplete()"
        ></food-edit>
      </div>
    </div>
    <food-list *ngIf="allFoods.length > 0"
      [childFoodList]="allFoods"
      (clickEditSender)="editFoodItem($event)"
    ></food-list>
    <hr>
    <food-stats
      [childFoodList]="allFoods"
    ></food-stats>
  </div>
  `
})

export class AppComponent {
  public allFoods: Food[] = [];
  public nao: string = moment().format("MM-DD-YYYY hh:mm A");

  selectedFoodItem: Food = null;

  addFoodItem(newFoodItem: Food) {
    this.allFoods.push(newFoodItem);
  }

  editFoodItem(foodItemToEdit: Food) {
    this.selectedFoodItem = foodItemToEdit;
  }

  editFoodItemComplete() {
    this.selectedFoodItem = null;
  }
}
