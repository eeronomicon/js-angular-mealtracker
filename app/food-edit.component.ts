import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-edit',
  template: `
    <div *ngIf="selectedFoodItem">
      <h3>Edit Food Item Entry</h3>
      <div class="form-group">
        <label>Edit Item Description:</label>
        <input [(ngModel)]="selectedFoodItem.description">
      </div>
      <div class="form-group">
        <label>Edit Item's Calories:</label>
        <input [(ngModel)]="selectedFoodItem.calories">
      </div>
      <div class="form-group">
        <label>Edit Notes:</label>
        <input [(ngModel)]="selectedFoodItem.notes">
      </div>
      <div>
        <button (click)="doneClicked()">Done!</button>
      </div>
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
