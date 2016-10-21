import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h2>Curious Canines' Calorie Counter*</h2>
    </div>
    <food-new  *ngIf="!selectedFoodItem"
      (newFoodSender)="addFoodItem($event)"
    ></food-new>
    <food-edit *ngIf="selectedFoodItem"
      [selectedFoodItem]="selectedFoodItem"
      (doneEditFoodItemSender)="editFoodItemComplete()"
    ></food-edit>
    <food-list *ngIf="allFoods.length > 0"
      [childFoodList]="allFoods"
      (clickEditSender)="editFoodItem($event)"
    ></food-list>
  </div>
  `
})

export class AppComponent {
  public allFoods: Food[] = [
    new Food("Chicken Fried Chicken", 650, "If it ain't fried, I ain't eatin' it."),
    new Food("Soda", 350, "High-fructose corn syrup. Yum."),
    new Food("Soft Serve Ice Cream", 400, "Only half a cup."),
    new Food("Mac & Cheese", 500, "Isn't this considered a vegetable?")
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
