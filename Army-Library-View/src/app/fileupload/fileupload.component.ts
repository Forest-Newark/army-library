import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/primeng';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import {Headers} from '@angular/http';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }



	 
  // fileChange(event) {
  //     let fileList: FileList = event.target.files;
  //     if(fileList.length > 0) {
  //         let file: File = fileList[0];
  //         let formData:FormData = new FormData();
  //         formData.append('File', file, file.name);
  //         let headers = new Headers();
  //         /** No need to include Content-Type in Angular 4 */
  //         headers.append('Content-Type', 'multipart/form-data');
  //         headers.append('Accept', 'application/json');
  //         let options = new RequestOptions({ headers: headers });
  //         this.http.post('http://localhost:8080/api/submitCSV', formData)
  //             .subscribe(
  //                 data => console.log('success'),
  //                 error => console.log(error)
  //             )
  //     }
  // }
  



  myUploader(event) {
    let fileList: FileList = event.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('File', file, file.name);
        let headers = new Headers();
        this.http.post('http://localhost:8080/api/submitCSV', formData)
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }

   
}

}
