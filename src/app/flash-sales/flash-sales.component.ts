import { analyzeAndValidateNgModules } from '@angular/compiler';
import { assertPlatform, Component, OnInit, ViewChild } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-flash-sales',
  templateUrl: './flash-sales.component.html',
  styleUrls: ['./flash-sales.component.css']
})
export class FlashSalesComponent implements OnInit {

  getProdDetails = (productCard: any) => {
    this.myservice.clickedProducts = productCard;
    localStorage.setItem('clickedProduct',JSON.stringify(productCard));
  }
  fSalesProd = [
    {
      productName: 'Maroon Leather',
      productCost: '₦34,000',
      productPrice: '₦24,000',
      productimgSrc: '/assets/images/maroon-bag.jpg',
      productBrand: 'Brand: Designer',
      productQty:1,
      productDetails: 'Product description here....',
    },
    {
      productName: 'Black Smart Watch',
      productCost: '₦10,000',
      productPrice: '₦6,000',
      productimgSrc: '/assets/images/smart-watch.jpg',
      productBrand: 'Brand: Designer',
      productQty:1,
      productDetails: 'Product description here....',
    },
    {
      productName: 'Benassi Nike Slide',
      productCost: '₦17,000',
      productPrice: '₦9,999',
      productimgSrc: '/assets/images/bennassi.jpg',
      productBrand: 'Brand: Designer',
      productQty:1,
      productDetails: 'Product description here....',
    },
    {
      productName: 'Diamond Laced Ring',
      productCost: '₦100,000',
      productPrice: '₦70,000',
      productimgSrc: '/assets/images/ring.jpg',
      productBrand: 'Brand: Designer',
      productQty:1,
      productDetails: 'Product description here....',
    }
  ];

  constructor(private myservice: MyservicesService) {
    // myservice.products.name = this.productName
  }

  ngOnInit(): void {
  }

}
