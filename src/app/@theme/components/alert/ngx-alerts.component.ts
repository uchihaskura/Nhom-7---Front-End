import { Component, Input, OnChanges } from '@angular/core';

export interface IAlertMessage {
  status: string;
  message: string;
}

@Component({
  selector: 'ngx-alerts',
  template: `
    <nb-alert *ngFor="let item of messages; let i = index" status="{{item.status}}" closable (close)="onClose(i)">
      {{item.message}}
    </nb-alert>
  `,
})
export class AlertShowcaseComponent implements OnChanges {
  @Input() messages: IAlertMessage[];

  onClose(indexOfItem: number) {
    this.messages = this.messages.filter((item, index) => index !== indexOfItem);
  }

  ngOnChanges() {
    setTimeout(() => {
      this.messages = [];
    }, 3000);
  }
}
