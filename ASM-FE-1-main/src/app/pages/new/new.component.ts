import { Component } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  title: any = [];
  constructor(private PagesComponent: PagesComponent, 
    private Router: Router){
    this.title =[];
  }
  ngOnInit(): void {
      this.getAllTitle();
  }
  getAllTitle() {
   return this.PagesComponent.getAllTitle().subscribe(data => this.title = data);

  }
  addNew(): void {
  
    this.Router.navigateByUrl('/pages/new-add')
}
deleteTitle(id:number){
  this.PagesComponent.deleteTitle(id).subscribe(data =>{
    this.title  = this.title.filter((item : any)=>{
      return item.id != id;
    
    
  })
  alert('Delete Title successfully');
})
}
}
