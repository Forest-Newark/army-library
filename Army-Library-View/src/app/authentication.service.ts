import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  adminLogin: string = 'LibraryAdmin'
  adminPassword: string = '246Band'
  userAuthenticated: boolean = false;

  constructor() { }

  checkUserCredentials(userName: string, password: string){
    if(userName === this.adminLogin && password === this.adminPassword){
      this.userAuthenticated = true;
    }
  }

  isUserAuthenticated(): boolean {
    return this.userAuthenticated;
  }

  logoutUser(): void {
    this.userAuthenticated = false;
  }



}
