import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/Models/ApiResponseModel';
import { userLoginService } from 'src/app/Services/UserLoginServices';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserName!: string;
  Password!: string;
  RegisterSuccFail!: string;
  registermessage!: ApiResponse;

  constructor(private userloginService: userLoginService , private router: Router) {
  }
  submitRegisterForm(){
    this.userloginService.register({UserName: this.UserName , Password: this.Password})
    .subscribe(res => {
      console.log("registration successful");
      this.router.navigate(['/login'])
    }
    );
    console.log(this.RegisterSuccFail)

  }
  ngOnInit(): void {}

}
