import { Component } from '@angular/core';
import { Food } from './food.model';
declare var moment: any;

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-xs-8">
        <h1>Curious Canines' Calorie Counter*</h1>
        <p>* No, this isn't an app to track what your furry friends eat; it's the other way around! ;-)</p>
        <food-list *ngIf="allFoods.length > 0"
          [childFoodList]="allFoods"
          (clickEditSender)="editFoodItem($event)"
        ></food-list>
        <food-stats *ngIf="allFoods.length > 0"
          [childFoodList]="allFoods"
        ></food-stats>
      </div>
      <div class="col-xs-4 cccc-image-holder">
        <img src="/resources/images/cccc.jpg">
        <food-new *ngIf="!selectedFoodItem"
          (newFoodSender)="addFoodItem($event)"
        ></food-new>
        <food-edit *ngIf="selectedFoodItem"
          [selectedFoodItem]="selectedFoodItem"
          (doneEditFoodItemSender)="editFoodItemComplete()"
        ></food-edit>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public allFoods: Food[] = [
    new Food("Fried Chicken", 610, "Sorry, not for you; chicken bones", moment("2016-10-20").format("MM-DD-YYYY")),
    new Food("Onion Rings", 400, "Definitely not for dogs!", moment("2016-10-20").format("MM-DD-YYYY")),
    new Food("Chocolate Cake", 500, "Dogs and chocolate? No way!", moment("2016-10-20").format("MM-DD-YYYY")),
    new Food("Diet Coke", 0, "Sorry, not for dogs, either.", moment("2016-10-20").format("MM-DD-YYYY"))
  ];

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
