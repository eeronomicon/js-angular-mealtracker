import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-stats',
  template: `
  <div class="row">
    <div class="col-xs-4">
      <p>Items Consumed: {{ childFoodList.length }}</p>
    </div>
    <div class="col-xs-4 text-center">
      <p>Total Calories: {{ calculateCaloriesTotal(childFoodList) }}</p>
    </div>
    <div class="col-xs-4 text-right">
      <p>Average Calories per Item: {{ displayCaloriesAverage(childFoodList) }}</p>
    </div>
  </div>
  `
})

export class FoodStatsComponent {
  @Input() childFoodList: Food[];

  calculateCaloriesTotal(childFoodList: Food[]) {
    var totalCalories = 0;
    for (var i = 0; i < childFoodList.length; i++) {
      totalCalories += parseInt(childFoodList[i].calories.toString());
    }
    return totalCalories;
  }

  displayCaloriesAverage(childFoodList: Food[]) {
    var totalCalories = this.calculateCaloriesTotal(childFoodList);
    return (totalCalories === 0 ? 0 : (totalCalories / childFoodList.length).toFixed(0));

  }

}
