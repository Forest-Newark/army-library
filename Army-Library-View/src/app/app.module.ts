import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { FileuploadComponent } from './fileupload/fileupload.component';
import {FileUploadModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    ButtonModule,
    FileUploadModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
