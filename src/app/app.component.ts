import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  third = false;
  title = 'resistortool';
  toleranceList;
  multiplierList;
  valuesList;
  a1 = false;
  a2 = false;
  a3 = false;
  a4 = false;
  a5 = false;
  resistor = [
    {
      color: 'green',
      value: 5
    },
    {
      color: 'blue',
      value: 6
    },
    {
      color: 'violet',
      value: 7
    },
    {
      color: 'green',
      value: Math.pow(10, 5)
    },
    {
      color: 'gold',
      value: '5%'
    }
  ];

  values = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };

  multiplier = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
    gold: -1,
    silver: -2
  };

  tolerance = {
    brown: '1%',
    red: '2%',
    green: '0.5%',
    blue: '0.25%',
    violet: '0.1%',
    grey: '0.05%',
    gold: '5%',
    silver: '10%',
    none: '20%'
  };
  constructor() {
    this.toleranceList = Object.keys(this.tolerance).map(key => {
      return {
        color: key,
        value: this.tolerance[key]
      };
    });
    this.multiplierList = Object.keys(this.multiplier).map(key => {
      return {
        color: key,
        value: Math.pow(10, this.multiplier[key])
      };
    });
    this.valuesList = Object.keys(this.values).map(key => {
      return {
        color: key,
        value: this.values[key]
      };
    });
    console.log(this.valuesList);
  }

  setColors(ring, value) {
    console.log(value);
    this.resistor[ring] = value;
  }
}
