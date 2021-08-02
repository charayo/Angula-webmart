import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  // getProdDetails:[];
  searchResult: any;
  getProdDetails:any;
  constructor(public products:MyservicesService,route:ActivatedRoute) {
    alert();
    this.searchResult = products.searchResult;
    route.params.subscribe(val=>{
      this.getProdDetails = (productCard: any) => {
        this.products.clickedProducts = productCard;
        localStorage.setItem('clickedProduct',JSON.stringify(productCard));
      }
    })
   }

  ngOnInit(): void {
   
  }

}
