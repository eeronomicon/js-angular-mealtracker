import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
declare var moment: any;

@Component({
  selector: 'food-new',
  template: `
    <h3>New Food Item Entry</h3>
    <div class="form-group">
      <label>What did you not share with your dog?</label>
      <input #newDescription  class="form-control">
    </div>
    <div class="form-group">
      <label>How many delicious, guilt-laden calories did it contain?</label>
      <input #newCalories  class="form-control" type="number">
    </div>
    <div class="form-group">
      <label>When did you consume this delightful nugget (which you did not share with your dog)?</label>
      <input #newDateStamp class="form-control" placeholder="{{ dateNow }}">
    </div>
    <div class="form-group">
      <label>What do you have to say for yourself, selfish Hoomin?</label>
      <input #newNotes class="form-control">
    </div>
    <button class="btn btn-primary" (click)="
      addClicked(newDescription.value, newCalories.value, newNotes.value, newDateStamp.value);
      newDescription.value='';
      newCalories.value='';
      newNotes.value='';
      newDateStamp.value='';
      ">Add</button>
  `
})

export class FoodNewComponent {
  @Output() newFoodSender = new EventEmitter();

  public dateNow: string = moment().format("MM-DD-YYYY");

  addClicked(description: string, calories: number, notes: string, dateStamp: string) {
    var newFoodToAdd: Food = new Food(description,calories, notes, moment(dateStamp).format("MM-DD-YYYY"));
    this.newFoodSender.emit(newFoodToAdd);
  }
}
