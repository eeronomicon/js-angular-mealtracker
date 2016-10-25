import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-new',
  template: `
    <h3>New Meal Item</h3>
    <div class="form-group">
      <label>What did you not share with your dog?</label>
      <input #newDescription  class="form-control">
    </div>
    <div class="form-group">
      <label>How many delicious, guilt-laden calories did it contain?</label>
      <input #newCalories  class="form-control" type="number">
    </div>
    <div class="form-group">
      <label>What do you have to say for yourself, selfish Hoomin?</label>
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
    if (description && calories && notes) {
      var newFoodToAdd: Food = new Food(description,calories, notes);
      this.newFoodSender.emit(newFoodToAdd);
    } else {
      alert('We hope you fill your dog\'s bowl better than how you fill out forms. Please fill in all the blanks.');
    }
  }
}
