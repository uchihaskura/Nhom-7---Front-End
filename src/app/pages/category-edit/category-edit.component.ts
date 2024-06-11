import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesComponent } from '../pages.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  categori: any= [];
  constructor(private router: ActivatedRoute,
    private PagesComponent: PagesComponent
  ){

  }
  ngOnInit(): void {
    this.getEditCategory()
      
  }
  getEditCategory(){
    this.router.params.subscribe(data=> {
      this.PagesComponent.getEditCategory(data.id).subscribe(data=> {
        this.categori = data
        
      })
    }
    )
  }

}
