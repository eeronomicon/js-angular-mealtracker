import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'food-list',
  template: `
  <h3>Here's What You've Eaten So Far (And NOT Shared with Your Dog)</h3>
  <select (change)="onFilterChange($event.target.value)" class="form-control">
    <option value="All" selected="selected">Show All</option>
    <option value="Low">Under 500 Calories</option>
    <option value="High">500 Calories or More</option>
  </select>
  <hr>
  <div class="row">
    <div class="col-xs-3">
      <p>Description</p>
    </div>
    <div class="col-xs-2">
      <p>Calories</p>
    </div>
    <div class="col-xs-6">
      <p>Notes and Comments</p>
    </div>
    <div class="col-xs-1 text-right">
      <p>Edit</p>
    </div>
  </div>
  <div *ngFor="let currentFoodItem of childFoodList | calories:caloriesFilterSetting" class="row">
    <div class="col-xs-3">
      <p>{{ currentFoodItem.description }}</p>
    </div>
    <div class="col-xs-2">
      <p>{{ currentFoodItem.calories }}</p>
    </div>
    <div class="col-xs-6">
      <p>{{ currentFoodItem.notes }}</p>
    </div>
    <div class="col-xs-1 text-right">
      <button (click)="editButtonClicked(currentFoodItem)" class="btn btn-sm">Edit</button>
    </div>
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
