import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productDetails: any;
  addToCart = false;
  qty: any;
  productClicked = false;
  cartProducts: any = [];
  forLStrg: any;
  count: any;
  index: any;
  cartPlusOne = false;
  addTo = () => {
    this.addToCart = true;
    this.count = this.product.cartCount;
    this.count++;
    this.product.cartCount = this.count;
    localStorage.setItem('cartCount', this.count)
    this.cartProducts.push(this.productDetails);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    localStorage.setItem(`${this.productDetails.productName}`, '1');
  }
  qtyIncre = () => {
    this.count = this.product.cartCount;
    this.count++;
    localStorage.setItem('cartCount', this.count);
    this.qty++;
    this.product.cartCount++;
    this.cartProducts[this.index].productQty = this.qty;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    if (this.qty != 1) {
      this.cartPlusOne = true;
    }
  }
  qtyDecre = () => {
    this.count = this.product.cartCount;
    this.count--;
    localStorage.setItem('cartCount', this.count);
    this.qty--;
    this.product.cartCount--;
    this.cartProducts[this.index].productQty = this.qty;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    if (this.qty == 1) {
      this.cartPlusOne = false;
    }
  }
  constructor(public product: MyservicesService) {
    this.productDetails = product.clickedProducts;
  }

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart') || '{}');

    }
    if (localStorage.getItem(`${this.productDetails.productName}`)) {
      this.productClicked = true;
      this.index = this.cartProducts.map(function (o: any) {
        return o.productName;
      }).indexOf(`${this.productDetails.productName}`);
      this.qty = this.cartProducts[this.index].productQty;
      if (this.qty != 1) {
        this.cartPlusOne = true;
      }
    }
  }

}
