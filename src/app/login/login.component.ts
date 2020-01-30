import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginDetails } from '../login-details';
import { LoginData } from '../login-data';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successLogin: boolean;
  
  loginDetails: LoginDetails = {
    username: '',
    password: ''
  };

  constructor(private router: Router, 
    private loginService: LoginService,
    private loginData: LoginData) { }

  ngOnInit() {
  }

  navigateToMain() {
    this.loginService.followUser(this.loginDetails.username, 
                                this.loginDetails.password).
    subscribe((response) => {
      console.log(response);
      if (response.res !== -1) {
        this.loginData.validLogin = true;
        this.loginData.secretNumber = response.res;
        this.router.navigateByUrl('/main');
      } else {
        this.loginData.validLogin = false;
        this.loginData.secretNumber = -1;
        this.router.navigateByUrl('/main');
      }
    });
  }

}
