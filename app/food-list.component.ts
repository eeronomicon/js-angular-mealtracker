import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <h3>Here's What You've Eaten So Far</h3>
  <div *ngFor="let currentFoodItem of childFoodList">
    <p>{{ currentFoodItem.description }} ({{ currentFoodItem.calories}} calories) [{{ currentFoodItem.notes }}]
    <button (click)="editButtonClicked(currentFoodItem)" class="btn btn-sm">Edit</button> </p>
  </div>
  `
})

export class FoodListComponent{
  @Input() childFoodList: Food[];
  @Output() clickEditSender = new EventEmitter();

  editButtonClicked(foodItemToEdit: Food) {
    this.clickEditSender.emit(foodItemToEdit);
  }
}
