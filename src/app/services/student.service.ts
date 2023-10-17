import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getAllStudent() : Observable <any> {
    throw new Error('Method not implemented.');
  }
  url = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students"


  constructor(private http: HttpClient) { } //dependency injection

  students(){
    return this.http.get(this.url);
  }

  studentsById(id:any){
    return this.http.get(this.url + "/" + id) ;
  }
  saveStudent(data: any){
    return this.http.post(this.url, data);
  }
  updateStudent(data:any){
    return this.http.put(this.url + "/" + data.id, data) ;
  }
  deleteStudent(id:any){
    return this.http.delete(this.url + "/" + id) ;
  }
  
}
