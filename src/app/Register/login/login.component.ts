import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../../Models/SignupModel';
import { userLoginService } from '../../Services/UserLoginServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName!: string;
  Password!: string;
  constructor(private userloginService: userLoginService) { }

  submitLoginForm(){
    this.userloginService.login({UserName: this.UserName , Password: this.Password})
  }

  ngOnInit(): void {

  }

}
