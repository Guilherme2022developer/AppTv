import { Component, OnInit } from '@angular/core';
import { SeoModel, SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(seoService: SeoService){
   
    let seoModel: SeoModel = <SeoModel>{
      title: 'TV Grátis',
      robots: 'Index,Follow'
      
    };
  seoService.setSeoDate(seoModel);
  }


  ngOnInit(){

  }

}
