import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import {DialogModule,InputTextModule,PasswordModule} from 'primeng/primeng';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginUserName: string;
  loginPassword; string;
  items: MenuItem[];
  authitems: MenuItem[];

  displayDialog: boolean = false;

  popLoginDialog(){
     this.displayDialog = !this.displayDialog;
  }

  login(){
    this.displayDialog = false;
    this.userService.checkUserCredentials(this.loginUserName,this.loginPassword);
    this.ngOnInit();
  }

  constructor(private userService: AuthenticationService) { }

  ngOnInit() {
   this.items=[];
   this.authitems = [
    {label:'File',
    icon:'fa-file',
    },
{
    label: 'About',
    icon: 'fa-info-circle',
},
{
    label: 'Edit',
    icon: 'fa-edit'
}
];
   
  
   }
  

  isUserAuthenticated(): boolean {
    if(this.userService.isUserAuthenticated()){
      this.populateMenuBar();
    }
    return this.userService.isUserAuthenticated();
  }

  logout(): void {

    this.userService.logoutUser();
    this.ngOnInit();
  }

  populateMenuBar(){
    
        this.authitems = [
          {label:'File',
          icon:'fa-file',
          },
      {
          label: 'About',
          icon: 'fa-info-circle',
      },
      {
          label: 'Edit',
          icon: 'fa-edit'
      }
  ];
  }

  blankMenuBar(){
    this.items = [];
  }

  clearMenuBar(){
    this.items = [];
  }

  



}
