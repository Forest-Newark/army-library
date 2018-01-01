import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  adminLogin: string = 'a'
  adminPassword: string = 'a'
  userAuthenticated: boolean = false;

  constructor() { }

  checkUserCredentials(userName: string, password: string): boolean{
    if(userName === this.adminLogin && password === this.adminPassword){
      this.userAuthenticated = true;
    }
    return this.userAuthenticated;
  }

  isUserAuthenticated(): boolean {
    return this.userAuthenticated;
  }

  logoutUser(): void {
    this.userAuthenticated = false;
  }



}
