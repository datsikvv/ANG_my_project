import { Injectable } from '@angular/core';


const AUTH = { login: 'admin', password: '123456' };



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isAuth: boolean = false;

  constructor() { }

  public login(login: string, password: string): boolean {
    if (login === AUTH.login && password ===AUTH.password) {
     return this.isAuth = true;
    } else 
    {
      return this.isAuth = false;
     }
  }
  public logout(): void {
    this.isAuth = false;
  }
}
