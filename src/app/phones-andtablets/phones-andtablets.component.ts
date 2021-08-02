import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-phones-andtablets',
  templateUrl: './phones-andtablets.component.html',
  styleUrls: ['./phones-andtablets.component.css']
})
export class PhonesANDtabletsComponent implements OnInit {
  getProdDetails = (productCard: any) => {
    this.myservice.clickedProducts = productCard;
    localStorage.setItem('clickedProduct', JSON.stringify(productCard));
  }
  phones = [
    {
      productName: 'Apple - iPhone 8 Plus 64GB, 4GB - Space Gray',
      productCost: '₦250,700',
      productPrice: '₦200,000',
      productimgSrc: '/assets/images/phone1.jpg',
      productBrand: 'Brand: Apple',
      productQty: 1,
      productDetails:``
    },
    {
      productName: 'Infinix HOT 7 (6.2-inch, 32GB + 2GB RAM)',
      productCost: '₦8,000',
      productPrice: '₦6,000',
      productimgSrc: '/assets/images/phone2.jpg',
      productBrand: 'Brand: Infinix',
      productQty: 1,
      productDetails: ``
    },
    {
      productName: 'Samsung Galaxy A10 (6.2-Inch, 32GB + 2GB RAM, Red)',
      productCost: '₦140,000',
      productPrice: '₦120,999',
      productimgSrc: '/assets/images/phone3.jpg',
      productBrand: 'Brand: Samsung',
      productQty: 1,
      productDetails: 'Product description here....',
    },
    {
      productName: 'TECNO Pop 2 Power (5.5-inch, 16GB + 1GB RAM, Black)',
      productCost: '₦97,000',
      productPrice: '₦90,000',
      productimgSrc: '/assets/images/phone4.jpg',
      productBrand: 'Brand: Tecno',
      productQty: 1,
      productDetails: ``,
    }
  ];
  constructor(public myservice:MyservicesService) { }

  ngOnInit(): void {
  }

}
