
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //properties for various actions
  //for user registration
  private _registerUrl ="http://localhost:3000/api/users"

  //for login
  private _loginUrl="http://localhost:3000/api/login"

  constructor(private http:HttpClient,private _router:Router) { }
  //method for registration
  registerUser(user: { email: string; password: string; }){
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user: any){
   return this.http.post<any>(this._loginUrl,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
   localStorage.removeItem('token')
   this._router.navigate(['/events'])
  }

}
