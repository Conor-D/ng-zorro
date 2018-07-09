import { SpinnerService } from './../services/spinner.service';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  host: {
    '[@state]': 'state',
    //'(@state.done)': 'onAnimationDone($event)',
  },
  animations: [
    trigger('state', [
      state('active', style({
        opacity: 1
      })),
      state('inactive', style({
        opacity: 0
      })),
      transition('active <=> inactive', animate('.3s ease-in'))
    ])
  ]
})
export class SpinnerComponent implements OnInit {
  state = 'active';
  constructor() { }

  ngOnInit() {
    //setTimeout(() => this.state = 'inactive', 2000);
  }

}
