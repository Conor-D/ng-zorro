import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router: Router, private spinner: SpinnerService) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart)
        this.spinner.isLoading = true;
      else if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        this.spinner.isLoading = false;
      }
    })
  }
}
