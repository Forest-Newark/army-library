import { Component, OnInit } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {Composition} from '../../classes/composition';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  compositions:Composition[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://army-library.herokuapp.com/composition').subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      // this.compositions = data.results;
      console.log(data);
    });
  }

}

