import { Component, OnInit } from '@angular/core';
import { SignupModel } from 'src/app/Models/SignupModel';
import { userLoginService } from 'src/app/Services/UserLoginServices';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private userloginService: userLoginService) { }
  UserName!: string;
  Password!: string;

  submitRegisterForm(){
    this.userloginService.register({UserName: this.UserName , Password: this.Password})
  }


  ngOnInit(): void {
  }

}
