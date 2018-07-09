import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router, private spinner: SpinnerService) { }

  ngOnInit() {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart)
        this.spinner.open();
      else if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        this.spinner.close();
      }
    })
  }
}
