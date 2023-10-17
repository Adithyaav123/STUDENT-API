import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WELCOME TO STUDENT API';
  studentData : any
  constructor(private studentInfo: StudentService, private router : Router){
    studentInfo.students().subscribe((data) =>{
      this.studentData = data;
      console.log(data)
    })
  }
  viewStudent(){
    this.router.navigateByUrl('/view')
  }

  updateStudent(){
    this.router.navigateByUrl('/update')
  }

  addStudent(){
    this.router.navigateByUrl('/add')
  }

  deleteStudent(){
    this.router.navigateByUrl('/remove')
  }
 
}
