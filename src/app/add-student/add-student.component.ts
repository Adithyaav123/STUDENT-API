import { Component, ElementRef, ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {


  studentData: any;
  addStudent = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(''),
    isMale : new FormControl(''),
    rollNo : new FormControl(''),
    date : new FormControl(''),
  })
  constructor(private studentInfo: StudentService, private router: Router){

  }
  addNewStudent(data: any){
    this.studentInfo.saveStudent(data).subscribe({
      next: (result) =>{
        alert("New Student Added Successfully");
        console.log(result)
      },
      error : (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse)
      }
    })
    console.log(data)
  }
}
