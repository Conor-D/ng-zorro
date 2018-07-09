import { Injectable, ComponentRef, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { ProgresserComponent } from '../progresser/progresser.component';

@Injectable({
  providedIn: 'root'
})
export class ProgresserService {
  progresser: HTMLElement;
  progresserRef: ComponentRef<ProgresserComponent>;
  
  constructor(private injector: Injector, private appRef: ApplicationRef, private resolver: ComponentFactoryResolver) {}

  start() {
    this.progresser = document.createElement('xw-progresser');
    let factory = this.resolver.resolveComponentFactory(ProgresserComponent);
    this.progresserRef = factory.create(this.injector, [], this.progresser);
    this.appRef.attachView(this.progresserRef.hostView);
    document.body.appendChild(this.progresser);
  }

  finish() {
    document.body.removeChild(this.progresser);
    this.appRef.detachView(this.progresserRef.hostView);
  }
}
