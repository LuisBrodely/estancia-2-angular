import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ counter }}</h1>
    <button (click)="increaseBy(-1)">-</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(+1)">+</button>
  `,
})
export class CounterComponent {
  title: string = 'bases';
  counter: number = 0

  increaseBy( value: number ):void {
    this.counter += value
  }

  resetCounter( ):void {
    this.counter = 0
  }
}
