import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../model/loginuser';
import { RegisterUser } from '../model/registeruser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  url : string = "http://localhost:8080/auth/"

  constructor(private http : HttpClient) 
  { 

  }

  login (user : LoginUser)
  {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    const body = JSON.stringify({username:user.getUsername(),password:user.getPassword()});

    return this.http.post(`${this.url}login`,body,{ headers });
  }

  register(user : RegisterUser)
  {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    const body = JSON.stringify({nome:user.getNome(),cognome:user.getCognome(),username:user.getUsername(),password:user.getPassword()});

    return this.http.post(`${this.url}register`,body,{ headers });
  }


}
