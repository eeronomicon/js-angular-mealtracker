import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-new',
  template: `
    <h3>New Meal Item</h3>
    <div class="form-group">
      <label>What did you eat?</label>
      <input #newDescription  class="form-control">
    </div>
    <div class="form-group">
      <label>How many calories did it contain?</label>
      <input #newCalories  class="form-control">
    </div>
    <div class="form-group">
      <label>Any notes and comments?</label>
      <input #newNotes class="form-control">
    </div>
    <button class="btn btn-primary" (click)="
      addClicked(newDescription.value, newCalories.value, newNotes.value);
      newDescription.value='';
      newCalories.value='';
      newNotes.value='';
      ">Add</button>
  `
})

export class FoodNewComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(description: string, calories: number, notes: string) {
    var newFoodToAdd: Food = new Food(description, calories, notes);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
