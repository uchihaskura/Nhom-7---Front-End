import { Component } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  ngOnInit(): void {
    let id = +this.router.snapshot.params['id']
    this.order = this.orders.find(p => p.productId === id)
  }
}
