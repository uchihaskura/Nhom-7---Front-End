import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner.component';
import {SpinnerDirective} from './spinner.directive';

@NgModule({
  declarations: [SpinnerComponent, SpinnerDirective],
  exports: [
    SpinnerComponent,
    SpinnerDirective,
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [SpinnerComponent],
})
export class SpinnerModule {
}
