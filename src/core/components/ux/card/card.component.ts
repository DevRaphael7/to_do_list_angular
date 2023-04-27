import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" [class.expanded]="expanded" (click)="toggle()">
      <div class="header">{{ title }}</div>
      <div class="description" *ngIf="expanded">{{ description }}</div>
      <div class="type">{{type}}</div>
    </div>
  `,
  styles: [`
    .card {
      width: 160px;
      height: 47px;
      background-color: #fff;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      padding: 1rem;

      border-radius: 0 5px 5px 0;

      border-right: 2px solid blue;
    }

    .card.expanded {
      height: 400px;
    }

    .header {
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 1rem;
      color: #757A87;
    }

    .type {
      width: 140px;
      height: 25px;
    }

    .description {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  `]
})
export class CardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() type: string;

  expanded = false;

  toggle() {
    this.expanded = !this.expanded;
  }
}
