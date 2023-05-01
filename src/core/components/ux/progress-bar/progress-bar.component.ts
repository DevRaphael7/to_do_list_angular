import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() progress = 20; // porcentagem do progresso

  constructor(private elementRef: ElementRef) {
    console.log('Progressbar')

    const ariaValueNow = this.elementRef.nativeElement.getAttribute('aria-valuenow');
  }

  getProgressStyle() {
    return {
      'width': `${this.progress}%`
    };
  }
}
