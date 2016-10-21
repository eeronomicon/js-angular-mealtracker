import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], filter) {
    var output: Food[] = [];
    if(filter === "Low") {
      for (var i = 0; i < input.length; ++i) {
        if(input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filter === "High") {
      for (var i = 0; i < input.length; ++i) {
        if(input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
