import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenubarModule,MenuItem, MenuItemContent} from 'primeng/primeng';
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
  displayCSVUpload: boolean = false;

  popLoginDialog(){
     this.displayDialog = !this.displayDialog;
  }

  login(){
    this.displayDialog = false;
    if(this.userService.checkUserCredentials(this.loginUserName,this.loginPassword)){
      this.populateMenuBar();
    };
  

  }

  constructor(private userService: AuthenticationService) { }

  ngOnInit() {
    this.items =[];
   }
  

  isUserAuthenticated(): boolean {
  
    return this.userService.isUserAuthenticated();
  }

  logout(): void {

    this.userService.logoutUser();
    this.items = [];
   
  }

  populateMenuBar(){
      let menuItemOne = {label:'Composition',
                        icon:'fa-file',
                        items: [
                          {label: 'Add', icon: 'fa-plus',command: (event) => {
                            alert('clicked');
                        }}
                      ]
                      };
      let menuItemTwo = {label:'About',icon:'fa-info-circle'};
      let menuItemUtility = {
        label:'Tools',
        icon:'fa-wrench',
        items: [
          {label:'Upload CSV', icon:'fa-upload',command:(event) => {
            this.displayCSVUpload = !this.displayCSVUpload;
          }},
          {label: 'Download CSV', icon: 'fa-download',command:(event)=>{
            alert('download');
          }}
        ]
      }
      this.items.push(menuItemOne);
      this.items.push(menuItemUtility);
    
  //       this.items = [
  //         {label:'File',
  //         icon:'fa-file',
  //         },
  //     {
  //         label: 'About',
  //         icon: 'fa-info-circle',
  //     },
  //     {
  //         label: 'Edit',
  //         icon: 'fa-edit'
  //     }
  // ];
  }

  blankMenuBar(){
    this.items = [];
  }

  clearMenuBar(){
    this.items = [];
  }

  



}
