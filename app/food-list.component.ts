import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'food-list',
  template: `
  <h3>Here's What You've Eaten So Far</h3>
  <select (change)="onFilterChange($event.target.value)" class="form-control">
    <option value="All" selected="selected">Show All</option>
    <option value="Low">Under 500 Calories</option>
    <option value="High">500 Calories or More</option>
  </select>
  <hr>
  <div *ngFor="let currentFoodItem of childFoodList | calories:caloriesFilterSetting">
    <p>{{ currentFoodItem.description }} ({{ currentFoodItem.calories}} calories) [{{ currentFoodItem.notes }}]
    <button (click)="editButtonClicked(currentFoodItem)" class="btn btn-sm">Edit</button> </p>
  </div>
  `
})

export class FoodListComponent{
  @Input() childFoodList: Food[];
  @Output() clickEditSender = new EventEmitter();

  caloriesFilterSetting: string = "All";

  editButtonClicked(foodItemToEdit: Food) {
    this.clickEditSender.emit(foodItemToEdit);
  }

  onFilterChange(optionFromMenu) {
    this.caloriesFilterSetting = optionFromMenu;
  }
}
