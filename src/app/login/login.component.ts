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
      this.loginData.validLogin = response.res;
      this.router.navigateByUrl('/main');
    });
  }

}
