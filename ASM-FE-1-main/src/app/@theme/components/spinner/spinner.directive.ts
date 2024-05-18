import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  Input, Renderer2, ViewContainerRef,
  OnInit,
} from '@angular/core';
import {SpinnerComponent} from './spinner.component';
import {Size} from './spinner.size';

@Directive({
  selector: '[dbsSpinner]',
})
export class SpinnerDirective implements OnInit {
  private shouldShow = false;
  spinner: ComponentRef<SpinnerComponent>;
  componentFactory: ComponentFactory<SpinnerComponent>;

  @Input('dbsSpinnerSize') spinnerSize: Size = 'medium';

  @Input('dbsSpinner')
  set dbsSpinner(val: boolean) {
    if (this.componentFactory) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.shouldShow = val;
    }
  }

  @HostBinding('class.nb-spinner-container') isSpinnerExist = false;

  constructor(
    private el: ElementRef,
    private directiveView: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);
    if (this.shouldShow) {
      this.show();
    }
  }

  hide() {
    if (this.isSpinnerExist) {
      this.directiveView.remove();
      this.isSpinnerExist = false;
    }
  }

  show() {
    if (!this.isSpinnerExist) {
      this.spinner = this.directiveView.createComponent<SpinnerComponent>(this.componentFactory);
      this.spinner.instance.inside = true;
      this.setInstanceInputs(this.spinner.instance);
      this.spinner.changeDetectorRef.detectChanges();
      this.renderer.appendChild(this.el.nativeElement, this.spinner.location.nativeElement);
      this.isSpinnerExist = true;
    }
  }

  setInstanceInputs(instance: SpinnerComponent) {
    if (typeof this.spinnerSize !== 'undefined') {
      instance.size = this.spinnerSize;
    }
  }
}
