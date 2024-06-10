import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";


@Component({
  selector: 'ngx-dialog-confirm',
  template: `
    <nb-card>
      <nb-card-header>{{ title }}</nb-card-header>
      <nb-card-body>{{ content }}</nb-card-body>
      <nb-card-footer>
        <button class="me-2" nbButton hero status="primary" (click)="confirm()">Xóa</button>
        <button nbButton hero status="danger" (click)="dismiss()">Hủy</button>
      </nb-card-footer>
    </nb-card>
  `,
})
export class DialogConfirmComponent implements OnInit {
  @Input() title: string
  @Input() content: string;

  constructor(protected ref: NbDialogRef<DialogConfirmComponent>) {}

  ngOnInit(): void {}
  confirm(): void {
    this.ref.close(true);
  }

  dismiss() {
    this.ref.close(false);
  }
}
