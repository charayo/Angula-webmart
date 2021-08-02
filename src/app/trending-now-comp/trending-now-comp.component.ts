import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-trending-now-comp',
  templateUrl: './trending-now-comp.component.html',
  styleUrls: ['./trending-now-comp.component.css']
})
export class TrendingNowCompComponent implements OnInit {
  getProdDetails = (productCard: any) => {
    this.myservice.clickedProducts = productCard;
    localStorage.setItem('clickedProduct',JSON.stringify(productCard));
  }
  trendingProd = [
    {
      productName: 'Glossy Strap Bag',
      productCost: '₦14,000',
      productPrice: '₦10,000',
      productQty:1,
      productimgSrc: '/assets/images/bag2.jpg',
      productBrand: 'Brand: Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Beach Comfort',
      productCost: '₦10,000',
      productPrice: '₦3,000',
      productQty:1,
      productimgSrc: '/assets/images/beach-comfort-slides.jpg',
      productBrand: 'Brand: Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: "Men's Casual Shirt",
      productCost: '#8,000',
      productPrice: '#3,999',
      productQty:1,
      productimgSrc: '/assets/images/mans-shirt.jpg',
      productBrand: 'Brand: Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Ladies Portable Bags',
      productCost: '#32,000',
      productPrice: '₦15,000',
      productQty:1,
      productimgSrc: '/assets/images/bags3.jpg',
      productBrand: 'Brand: Designer',
      productDetails: 'Product description here....',
    }
  ];
  constructor(private myservice: MyservicesService) { }

  ngOnInit(): void {
  }

}
