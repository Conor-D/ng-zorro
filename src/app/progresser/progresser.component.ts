import { Component } from '@angular/core';

@Component({
  selector: 'xw-progresser',
  template: `
    <div [class.before]="beforeClass"></div>
    <div [class.after]="afterClass"></div>
  `,
  styles: [`
    :host .before,
    :host .after {
      position: fixed;
      top: 0;
      opacity: 0;
      width: 50vw;
      animation: progressing 2s linear infinite;
      height: 2px;
      background: linear-gradient(to left, #f5222d, #3F51B5);
    }

    @keyframes progressing {
      0% {
        transform: translateX(-50vw)
      }
      25% {
        transform: translateX(0vw);
        opacity: 1;
      }
      50% {
        transform: translateX(50vw)
      }
      75% {
        transform: translateX(100vw)
        opacity: 0;
      }
      100% {
        transform: translateX(100vw)
      }
    }
  `]
})
export class ProgresserComponent {
  beforeClass = false;
  afterClass = false;

  constructor() {
    this.beforeClass = true;
    setTimeout(() => this.afterClass = true, 1000);
  }
}
