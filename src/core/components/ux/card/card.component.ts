import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" [class.expanded]="expanded" (click)="toggle()">
      <div class="header">
        <p>{{ title }}</p>
        <div class="type">{{type}}</div>
      </div>

      <div class="row-divider"></div>

      <ng-content select="#infos-card"></ng-content>

      <div class="description" *ngIf="expanded">{{ description }}</div>
    </div>
  `,
  styles: [`
    @import '/src/styles/colors.scss';

    .card {
      width: 470px;
      height: 84px;
      background-color: #fff;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      padding: 1rem;

      word-break: break-all;

      border-radius: 5px;

      border-right: 5px solid $grey-color;
    }

    .card.expanded {
      height: 400px;
    }

    .card .row-divider {
      width: 423px;
      height: 1px;
      background-color: $grey-color;
    }

    .header {
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 2.5px;
      color: #757A87;

      display: flex;
      justify-content: space-between;
    }

    .type {
      width: 140px;
      height: 22px;
      text-align: center;
      background-color: #FFF6E5;
      color: $warning-c;
      border-radius: 10px;
    }

    .description {
      font-size: 14px;
      letter-spacing: 2px;
      font-weigth: 300;
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
