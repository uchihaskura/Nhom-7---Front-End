import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { PagesComponent } from '../pages.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  categori: any ={
     name: '',
     image: ''
  }
 
  constructor (
    private PagesComponent: PagesComponent,
    private Router: Router
  ){

  }
  ngOnInit(): void {
      
  }
  addCategory(): void {
    console.log(this.categori);
    this.PagesComponent.addCategory(this.categori).subscribe(data => console.log(data) )
    alert('Category added successfully');
    this.Router.navigateByUrl('/pages/categori')
   

  }
  
  
}
