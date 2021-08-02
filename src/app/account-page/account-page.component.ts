import { Component, OnInit, ElementRef, Output } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})

export class AccountPageComponent implements OnInit {
  
  constructor(public myservice:MyservicesService) { 

  }
   
  // signup = true;

  ngOnInit(): void {
    
  }
  

}
