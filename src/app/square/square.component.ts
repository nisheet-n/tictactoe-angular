import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="button-x" *ngIf="value=='X'">{{value}}</button>
    <button class="button-o" *ngIf="value=='O'">{{value}}</button>  
  `,
  styles: []
})

export class SquareComponent {
  @Input()
  value!: 'X' | 'O';
}