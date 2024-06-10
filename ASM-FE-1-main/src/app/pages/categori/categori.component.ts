import { Component, OnInit } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { Router } from '@angular/router';

  
@Component({
  selector: 'app-categori',
  templateUrl: './categori.component.html',
  styleUrls: ['./categori.component.scss']
})
export class CategoriComponent implements OnInit {
  categori: any = [];
  constructor(private PagesComponent: PagesComponent, 
    private Router: Router){
    this.categori =[];
  }
  ngOnInit(): void {
      this.getAllCategories();
  }
  getAllCategories() {
   return this.PagesComponent.getAllCategory().subscribe(data => this.categori = data);

  }
  addCategory(): void {
  
    this.Router.navigateByUrl('/pages/category-add')
}

  deleteCategory(id:number){
    this.PagesComponent.deleteCategory(id).subscribe(data =>{
      this.categori  = this.categori.filter((item : any)=>{
        return item.id != id;
      
      
    })
    alert('Delete category successfully');
  })
  }

}
