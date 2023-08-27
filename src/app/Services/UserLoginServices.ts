import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignupModel } from "../Models/SignupModel";
@Injectable()
export class userLoginService{
  constructor(private http: HttpClient){}



  register(values:{UserName: string, Password:string}){
    this.http.post('http://localhost:5132/api/SignUp/Register' , values)
    .subscribe(res => console.log(res));
  }

  login(register:{UserName: string , Password: string}){
    this.http.post("http://localhost:5132/api/SignUp/Login" , register)
    .subscribe(res=> console.log(res));
  }
  // sendSignUpData(formData: SignupModel){
  //   this.http.post('http://localhost:5132/api/SignUp', formData)
  //   .subscribe(res =>console.log(res))
  // }
}


