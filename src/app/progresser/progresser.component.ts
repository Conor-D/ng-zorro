import { Component } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'xw-progresser',
  template: '',
  styles: [`
    :host {
      position: fixed;
      top: 0;
      width: 50vw;
      border-top: 3px solid #f5222d;
    }
  `],
  host: {
    '[@state]': 'state',
    '(@state.done)': 'animationDone($event)'
  },
  animations: [
    trigger('state', [
      transition('* <=> *', [
        style({
          transform: 'translateX(-50vw)'
        }),
        animate('1s linear', style({
          transform: 'translateX(100vw)'
        }))
      ])
    ])    
  ]
})
export class ProgresserComponent {
  state = false;
  animationDone() {
    this.state = !this.state
  }
}
