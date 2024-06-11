import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesComponent } from '../pages.component';

@Component({
  selector: 'app-new-add',
  templateUrl: './new-add.component.html',
  styleUrls: ['./new-add.component.scss']
})
export class NewAddComponent  implements OnInit {
  title: any ={

    image: '',
    categori: '',
    poster: '',
    date: '',
    title: ''
 }

  constructor (
    private PagesComponent: PagesComponent,
    private Router: Router
  ){

  }
  ngOnInit(): void {
      
  }
  addTitle(): void {
    console.log(this.title);
    this.PagesComponent.addTitle(this.title).subscribe(data => console.log(data) )
    alert('New added successfully');
    this.Router.navigateByUrl('/pages/new')
   

  }

}
