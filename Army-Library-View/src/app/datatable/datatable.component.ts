import { Component, OnInit } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {Composition} from '../../classes/composition';
import {HttpClient} from '@angular/common/http';


// https://www.primefaces.org/primeng/#/datatable/crud

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  compositions:Composition[];

  displayDialog: boolean;

  onRowSelect(event) {
    // this.newCar = false;
    // this.car = this.cloneCar(event.data);
    // this.displayDialog = true;
}

showDialogToAdd() {

}

  constructor(private http: HttpClient) { }

  ngOnInit() {



    // this.http.get<Composition>('http://army-library.herokuapp.com/composition').subscribe(data => {
    //   // data is now an instance of type ItemsResponse, so you can do this:
    //   //this.compositions = data.json()
    //   console.log(data.title);
    // });

    this.http.get<Composition[]>('http://localhost:8080/api/composition').subscribe(data => {
          // data is now an instance of type ItemsResponse, so you can do this:
          //this.compositions = data.json()
          console.log(data);
          

        this.compositions = data;
          
          
          // for (let entry of data) {
          //     console.log('Entry :'+entry); // 1, "string", false
          // }
        });

  }

}

