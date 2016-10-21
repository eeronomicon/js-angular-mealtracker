import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h2>Curious Canines' Calorie Counter*</h2>
    </div>
    <food-new
      (newFoodSender)="addFoodItem($event)"
    ></food-new>
    <food-edit
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
  public allFoods: Food[] = [];

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
