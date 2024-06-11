import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { MENU_ITEMS } from './pages-menu';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
  constructor(
    private http: HttpClient
  ) {}
  API_url = 'https://66666907a2f8516ff7a34d24.mockapi.io/category'
  API_url1 = 'https://66666907a2f8516ff7a34d24.mockapi.io/title'
  getAllCategory(){
    return this.http.get(`${this.API_url}`)
  }
  addCategory(data : any){
    return this.http.post(this.API_url , data)
  }
  deleteCategory(id : number){
    return this.http.delete(`${this.API_url}/${id}`);
  }
  getEditCategory(id : number){
    return this.http.get(`${this.API_url}/${id}`);
  }
  
  getAllTitle(){
    return this.http.get(`${this.API_url1}`)
  }
  addTitle(data : any){
    return this.http.post(this.API_url1 , data)
  }
  deleteTitle(id : number){
    return this.http.delete(`${this.API_url1}/${id}`);
  }
}
