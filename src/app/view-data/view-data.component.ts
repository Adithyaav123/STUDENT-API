import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  studentData: any;
  filteredStudentData: any;
  searchQuery: string = '';

  constructor(private studentInfo: StudentService, private router: Router) {}

  ngOnInit() {
    this.loadStudentData();
  }

  updateStudent() {
    this.router.navigateByUrl('/update');
  }

  addStudent() {
    this.router.navigateByUrl('/add');
  }

  deleteStudent() {
    this.router.navigateByUrl('/remove');
  }

  loadStudentData() {
    this.studentInfo.students().subscribe((data) => {
      this.studentData = data;
      this.filteredStudentData = data;
      console.log(data);
    });
  }

searchStudents() {
  if (this.studentData) {
    if (!this.searchQuery) {
      
      this.filteredStudentData = this.studentData;
    } else {
      
      this.filteredStudentData = this.studentData.filter((student: any) => {
        const name = student.name ? student.name.toLowerCase() : '';
        const rollNo = student.rollNo ? student.rollNo.toString() : '';
        const query = this.searchQuery.toLowerCase();
        return name.includes(query) || rollNo.includes(query);
      });
    }
  }
}
}
