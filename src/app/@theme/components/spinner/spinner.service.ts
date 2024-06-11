import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef, EmbeddedViewRef,
  Injectable, Injector,
} from '@angular/core';
import {SpinnerComponent} from './spinner.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinner: ComponentRef<SpinnerComponent>;
  spinnerExist: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
  }

  show() {
    if (!this.spinnerExist) {
      this.spinner = this.componentFactoryResolver
        .resolveComponentFactory(SpinnerComponent)
        .create(this.injector);
      this.appRef.attachView(this.spinner.hostView);
      const domElem = (this.spinner.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.spinnerExist = true;
    }
  }

  hide() {
    if (this.spinnerExist) {
      this.appRef.detachView(this.spinner.hostView);
      this.spinner.destroy();
      this.spinnerExist = false;
    }
  }
}
