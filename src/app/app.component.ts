import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora';
  display: string = '0';
  currentOperator: string = '';
  previousValue: number = 0;

  appendToDisplay(value: string) {
    if (this.display === '0') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  clearDisplay() {
    this.display = '0';
  }

  setOperator(operator: string) {
    this.currentOperator = operator;
    this.previousValue = parseFloat(this.display);
    this.display = '0';
  }

  calculate() {
    const currentValue = parseFloat(this.display);
    let result: number = 0;

    switch (this.currentOperator) {
      case '+':
        result = this.previousValue + currentValue;
        break;
      case '-':
        result = this.previousValue - currentValue;
        break;
      case '*':
        result = this.previousValue * currentValue;
        break;
      case '/':
        result = this.previousValue / currentValue;
        break;
    }

    this.display = result.toString();
    this.currentOperator = '';
    this.previousValue = 0;
  }
}
