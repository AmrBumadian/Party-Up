import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequestPayload } from './login/login.request.payload';
import { LoginResponse } from './login/login.response.payload';
import {RegisterRequestPayload} from "./register/register-request.payload";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  register(registerPayload : RegisterRequestPayload) : Observable<any>{
    return this._httpClient.post('http://localhost:8080/api/auth/signup', registerPayload, {responseType : 'text'});
  }

  login(loginRequestPayload: LoginRequestPayload){
    this._httpClient.post<LoginResponse>('http://localhost:8080/api/auth/signin', loginRequestPayload).pipe(map(data => {
      
    }));
  }
}
