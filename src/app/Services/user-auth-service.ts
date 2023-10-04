import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService{
  username!: string;
  constructor() { }

  setLoggedInUserName(un: string){
    localStorage.setItem('name' , un);
  }
  getLoggedInUserName(){
    return localStorage.getItem('name');
  }

  logout(){
    localStorage.removeItem('token');
  }

}
