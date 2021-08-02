import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyservicesService } from '../myservices.service';
import {trigger, transition, useAnimation} from '@angular/animations';
// import {shake} from 'ngx-animate';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // animations: [trigger('shake',[transition('*=>*', useAnimation(shake))])]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  textType = 'password';
  userPassword: string;
  userEmail: string;
  userName: string;
  constructor(public myservice: MyservicesService) {
    this.userEmail = '';
    this.userPassword = '';
    this.userName = '';
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      // 'password': new FormControl(null,[Validators.maxLength,Validators.pattern]),
    })
  }
  onSubmit() {
    
    this.userName = this.signupForm.value.username.toLowerCase();
    this.userPassword = this.signupForm.value.password;
    this.userEmail = this.signupForm.value.email.toLowerCase();
    let userDetails = {
      userPass: this.userPassword,
      userEmail: this.userEmail,
      userId: this.userName,
    }
    localStorage.setItem(`${this.userName}`, JSON.stringify(userDetails));
    localStorage.setItem('logged', 'true');
    localStorage.setItem('presentUser', `${this.userName}`);
    this.myservice.logged=true;
    // console.log(this.signupForm.value.password);
    // console.log(this.userPassword, this.userName);
  }
  
}
