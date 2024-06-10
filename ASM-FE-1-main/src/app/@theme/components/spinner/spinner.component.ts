import {Component, HostBinding, Input} from '@angular/core';
import {Size} from './spinner.size';

@Component({
  selector: 'ngx-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})

export class SpinnerComponent {

  @Input() inside: boolean;

  @Input() size: Size = 'medium';

  @HostBinding('class.size-tiny')
  get tiny() {
    return this.size === 'tiny';
  }

  @HostBinding('class.size-giant')
  get giant() {
    return this.size === 'giant';
  }
}
