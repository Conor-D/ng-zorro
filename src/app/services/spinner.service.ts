import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading: boolean;

  constructor(private injector: Injector, private appRef: ApplicationRef, private resolver: ComponentFactoryResolver) {}

  show() {
    let spinner = document.createElement('spinner');
    let factory = this.resolver.resolveComponentFactory(SpinnerComponent);
    let spinnerRef = factory.create(this.injector, [], spinner);
    this.appRef.attachView(spinnerRef.hostView);

    document.body.appendChild(spinner);
  }
}
