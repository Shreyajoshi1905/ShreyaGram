import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../../Models/SignupModel';
import { userLoginService } from '../../Services/UserLoginServices';
import { ApiResponse } from 'src/app/Models/ApiResponseModel';
import { Route, Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName!: string;
  Password!: string;
  message!: ApiResponse;
  loginSuccFail!: string;
  loggedInUserName!:string;
  constructor(private userloginService: userLoginService , private router: Router , private userauthservice: UserAuthService) { }

  submitLoginForm(){
   this.userloginService.login({UserName: this.UserName , Password: this.Password}).subscribe(
    res =>{
        this.message = res;
        if(this.message.success){
          const token:any =this.message.message;
          localStorage.setItem('token' , token);
          this.loginSuccFail = "successfully logged in!"
          this.userauthservice.setLoggedInUserName(this.UserName);

          this.router.navigate(["/showblogs"])
          console.log(this.message.success);
        }
        else{
          this.loginSuccFail = "please check your creds first!"
          console.log(this.message.success);
        }
      }
   )
}

  ngOnInit(): void {

  }

}
