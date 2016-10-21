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
  </div>
  `
})

export class AppComponent {
  public allFoods: Food[] = [];

  addFoodItem(newFoodItem: Food) {
    this.allFoods.push(newFoodItem);
    console.log(this.allFoods);
  }

}
