import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
