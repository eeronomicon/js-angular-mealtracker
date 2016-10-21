import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-edit',
  template: `
    <h3>Edit Food Item Entry</h3>
    <div class="form-group">
      <label>Edit item description:</label>
      <input [(ngModel)]="selectedFoodItem.description" class="form-control">
    </div>
    <div class="form-group">
      <label>Edit item's calories:</label>
      <input [(ngModel)]="selectedFoodItem.calories" class="form-control">
    </div>
    <div class="form-group">
      <label>Edit notes and comments:</label>
      <input [(ngModel)]="selectedFoodItem.notes" class="form-control">
    </div>
    <div>
      <button (click)="doneClicked()" class="btn btn-success">Done!</button>
    </div>
  `
})

export class FoodEditComponent {
  @Input() selectedFoodItem: Food;
  @Output() doneEditFoodItemSender = new EventEmitter();
  doneClicked() {
    this.doneEditFoodItemSender.emit();
  }
}
