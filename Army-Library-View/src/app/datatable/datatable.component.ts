import { Component, OnInit } from '@angular/core';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { ButtonModule,InputTextareaModule } from 'primeng/primeng';
import { Composition } from '../../classes/composition';
import { HttpClient } from '@angular/common/http';
import { DialogModule } from 'primeng/primeng';
import {AuthenticationService} from '../authentication.service';


// https://www.primefaces.org/primeng/#/datatable/crud

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  compositions: Composition[];
  catagories = [];
  displayDialog: boolean;

  comp: PrimeComposition = new PrimeComposition();

  onRowSelect(event) {
    this.comp = this.cloneComp(event.data);
    this.displayDialog = true;
  }

  cloneComp(c: Composition): Composition {
    let composition = new Composition();
    for (let prop in c) {
      composition[prop] = c[prop];
    }
    return composition;
  }


  save(c: PrimeComposition) {

    this.http.post('https://army-library.herokuapp.com/api/composition/update', this.comp)
      .subscribe(
      data => { console.log('success'), this.displayDialog = false;this.subscribeToData(); },
      error => console.log(error)
      )
  }

  isUserAuthenticated():boolean { 
    return this.userService.isUserAuthenticated();
  }
  


  constructor(private http: HttpClient, private userService: AuthenticationService) { }

  ngOnInit() {
    this.subscribeToData();
    this.catagories.push({ label: 'All Brands', value: null });
    this.catagories.push({ label: 'CS', value: 'CS' });
  }

  subscribeToData() {
    this.http.get<Composition[]>('https://army-library.herokuapp.com/api/composition').subscribe(data => {
      this.compositions = data;

    });

  }

}

class PrimeComposition {

  constructor(public id?, public composition?, public catagory?, public libraryNumber?, public title?, public composer?, public arranger?, public ensemble?, public copyright?, public notes?) { }
}


