import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {
  cartProducts: any;
  addToCart = false;
  count: any;
  qty: any;
  totalPrice = 0;
  index: any;
  update: any;
  bill: any;
  arrayPrice: any = [];
  comVal: any;
  tempPrice = 0;
  addComma = (val: any) => {
    this.comVal = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  priceCalc = () => {
    this.bill = '';
    this.tempPrice = 0;
    this.arrayPrice.forEach((element: any) => {
      this.tempPrice += element;
      this.addComma(this.tempPrice);
      this.totalPrice = this.comVal;
      this.product.amountToPay = this.comVal;
    });
  }
  priceCalcUpdate = () => {
    this.arrayPrice = [];
    this.cartProducts.forEach((element: any) => {
      this.bill = element.productPrice.replace(/₦/g, '');
      this.bill = parseFloat(this.bill.replace(/,/g, ''));
      this.bill = this.bill * element.productQty;
      this.arrayPrice.push(this.bill);

    });
    this.priceCalc();
  }
  qtyIncre = (productDetails: any) => {
    this.count = this.product.cartCount;
    this.count++;
    this.product.cartCount = this.count;
    localStorage.setItem('cartCount', this.count);
    this.index = this.cartProducts.map(function (o: any) {
      return o.productName;
    }).indexOf(`${productDetails.productName}`);
    this.qty = this.cartProducts[this.index].productQty;
    this.qty++;
    this.cartProducts[this.index].productQty = this.qty;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.arrayPrice = [];
    this.priceCalcUpdate();
  }
  qtyDecre = (productDetails: any) => {
    this.count = this.product.cartCount;
    this.count--;
    this.product.cartCount = this.count;
    localStorage.setItem('cartCount', this.count);
    this.index = this.cartProducts.map(function (o: any) {
      return o.productName;
    }).indexOf(`${productDetails.productName}`);
    this.qty = this.cartProducts[this.index].productQty;
    this.qty--;
    this.cartProducts[this.index].productQty = this.qty;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.arrayPrice = [];
    this.priceCalcUpdate();
  }
  removeFromCart = (productDetails: any) => {
    this.index = this.cartProducts.map(function (o: any) {
      return o.productName;
    }).indexOf(`${productDetails.productName}`);
    this.count = Number(this.product.cartCount);
    this.qty = Number(this.cartProducts[this.index].productQty);
    this.update = this.count - this.qty;
    this.product.cartCount = this.update;
    localStorage.setItem('cartCount', this.update);
    this.cartProducts.splice(this.index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    localStorage.removeItem(`${productDetails.productName}`);
    this.arrayPrice = [];
    this.priceCalcUpdate();
    this.count = this.product.cartCount;
  }
  // payWithPaystack = ()=> {
  //   let handler = PaystackPop.setup({
  //     key: 'pk_test_xxxxxxxxxx', // Replace with your public key
  //     // email: document.getElementById("email-address").value,
  //     // amount: document.getElementById("amount").value * 100,
  //     ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
  //     // label: "Optional string that replaces customer email"
  //     onClose: function(){
  //       alert('Window closed.');
  //     },
  //     callback: function(response:any){
  //       let message = 'Payment complete! Reference: ' + response.reference;
  //       alert(message);
  //     }
  //   });
  //   handler.openIframe();
  // }
  constructor(public product: MyservicesService) {

  }

  ngOnInit(): void {
    this.cartProducts = JSON.parse(localStorage.getItem('cart') || '{}');
    if (localStorage.getItem(`${this.cartProducts.productName}`)) {
      this.qty = localStorage.getItem(`${this.cartProducts.productName}`);

    }
    this.count = this.product.cartCount;
    this.priceCalcUpdate();
  }

}
