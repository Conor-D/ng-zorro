import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  spinner: HTMLElement;
  spinnerRef: ComponentRef<SpinnerComponent>;

  constructor(private injector: Injector, private appRef: ApplicationRef, private resolver: ComponentFactoryResolver) {}

  open() {
    this.spinner = document.createElement('spinner');
    let factory = this.resolver.resolveComponentFactory(SpinnerComponent);
    this.spinnerRef = factory.create(this.injector, [], this.spinner);
    this.appRef.attachView(this.spinnerRef.hostView);
    document.body.appendChild(this.spinner);
  }

  close() {
    document.body.removeChild(this.spinner);
    this.appRef.detachView(this.spinnerRef.hostView);
  }
}
