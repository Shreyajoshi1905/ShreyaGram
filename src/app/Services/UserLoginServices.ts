import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../Models/ApiResponseModel";
@Injectable()
export class userLoginService{
  constructor(private http: HttpClient){}
  message!: ApiResponse;
  registerMessage!: string;
  tokenValue!: string

  register(values:{UserName: string, Password:string}):Observable<any>{
    return this.http.post('http://localhost:5132/api/SignUp/Register' , values)
    // .subscribe(res => {
    //   this.message = res;
    //   if(this.message.success == false){
    //     this.registerMessage = "Username already present"
    //   }
    // }
    // );
    // console.log(this.registerMessage)
    // return this.registerMessage;
  }




  login(register:{UserName: string , Password: string}):Observable<ApiResponse>{
    return this.http.post<any>("http://localhost:5132/api/SignUp/Login" , register )

    // .subscribe(res =>{
    //   this.message = res;
    //   if(this.message.success){
    //     const token:any =this.message.message;
    //     localStorage.setItem('token' , token);
    //     console.log(this.message.success);
    //   }
    //   else{
    //     console.log(this.message.success);
    //   }
    // })
  }


  // sendSignUpData(formData: SignupModel){
  //   this.http.post('http://localhost:5132/api/SignUp', formData)
  //   .subscribe(res =>console.log(res))
  // }
}


