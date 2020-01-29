import { Component, OnInit } from '@angular/core';
import { LoginData } from '../login-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  successLogin: boolean;
  successRandInt: number;

  constructor(private loginData: LoginData) { 
    console.log(JSON.stringify(this.loginData));
    this.successRandInt = Math.round(Math.random() * 1000000);
    this.successLogin = loginData.validLogin;
  }

  ngOnInit() {
  }

}
