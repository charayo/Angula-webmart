import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  textType = 'password';
  constructor(public myservice: MyservicesService, private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(form: NgForm) {

    let loginId = form.value.loginId.toLowerCase();
    let loginPass = form.value.password;
    if (localStorage.getItem(`${loginId}`)) {
      let loginCache = JSON.parse(localStorage.getItem(`${loginId}`) || "{}");
      let storedName = loginCache.userId;
      let storedPass = loginCache.userPass;
      if (loginId == storedName && loginPass == storedPass) {
        localStorage.setItem('logged', 'true');
        localStorage.setItem('presentUser', `${loginId}`);
        this.myservice.logged=true;
        this.myservice.presentUser = `${loginId}`;
        alert('welcome back! ' + storedName);
        // this.router.navigate(['/home']);
        location.href= "/home"
      }
    } else{
      
    }
  }
}
/*
 //For Login Page
    $('#loginBtn').on('click', () => {
        let username = $('#userIdInp').val();
        username = username.toLowerCase();
        if (localStorage.getItem(`${username}`)) {
            let loginCache = JSON.parse(localStorage.getItem(`${username}`));
            // let name = $('#userIdInp').val();
            let password = $('#passInp').val();
            let storedName = loginCache.userId;
            let storedPass = loginCache.userPass;
            let storedEmail = loginCache.userEmail;
            username = username.toLowerCase();
            storedName = storedName.toLowerCase();

            if (username == storedName && password == storedPass || username == storedEmail && password == storedPass) {
                localStorage.setItem('logged', true);
                localStorage.setItem('presentUser', `${username}`);
                alert('welcome back! ' + storedName);
                $('#myModal').modal('hide');
                window.location.href = "index.html";

            } else {
                $('#myModal').effect('shake');
            }

        } else {
            $('#myModal').effect('shake');
        }

    })
*/