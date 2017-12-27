import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DialogModule} from 'primeng/primeng';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginUserName: string;
  loginPassword; string;

  displayDialog: boolean = false;
  popLoginDialog(){
     this.displayDialog = !this.displayDialog;
  }
  login(){
    this.displayDialog = false;
    this.userService.checkUserCredentials(this.loginUserName,this.loginPassword);
    this.loginUserName = null;
    this.loginPassword = null;
  }

  constructor(private userService: AuthenticationService) { }

  ngOnInit() {
  }

  isUserAuthenticated(): boolean {
    return this.userService.isUserAuthenticated();
  }

  logout(): void {
    this.userService.logoutUser();
  }

}
