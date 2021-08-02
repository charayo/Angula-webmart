import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  cartCount: any;
  allProducts: any;
  searchInp: any ;
  presentUser:any;
  search = () => {
    this.router.navigate(['/result']);
    this.myservice.searchResult = [];
    let keyword, item, i, input;
    // let filter: [{}];
    input = this.searchInp;
    if (input == "" || input == 'undefined') {
      console.log('error');
    }
    keyword = input.toUpperCase();
    for (i = 0; i < this.allProducts.length; i++) {
      item = this.allProducts[i].productName
      if (item.toUpperCase().indexOf(keyword) > -1 && input != "") {
        console.log(item)
        // filter = this.allProducts[i];
        this.myservice.searchResult.push(this.allProducts[i])
      }
    }
    
  }
  constructor(public myservice: MyservicesService, private router:Router) {
    this.allProducts = myservice.allProducts;
    this.presentUser = myservice.presentUser.toUpperCase();
    
  }

  ngOnInit(): void {

  }
onSignOut(){
  localStorage.removeItem('logged');
  localStorage.removeItem('presentUser');
  this.myservice.logged=false;
}
}
