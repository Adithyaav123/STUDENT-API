import { Component } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms'; 
import { StudentService } from '../services/student.service'; 
import { HttpErrorResponse } from '@angular/common/http'; 
 
@Component({ 
  selector: 'app-delete-student', 
  templateUrl: './delete-student.component.html', 
  styleUrls: ['./delete-student.component.css'] 
}) 
export class DeleteStudentComponent { 
   
  deleteStudent = new FormGroup({ 
    id:new FormControl(''), 
    name:new FormControl(''), 
    email:new FormControl(''), 
    age:new FormControl(''), 
    
    rollNo:new FormControl(''), 
  
  }) 
 
  studentData:any 
  student:any=[{}] 
 
 
  constructor(private studentInfo:StudentService){ 
    studentInfo.students().subscribe((data)=> 
    { 
     
      console.log("comming",data); 
      this.studentData=data 
      console.log("studentData values",this.studentData); 
    }) 
  } 
  getSelectedValue(event : any){
         console.log(event.target.value);
         this.studentInfo.studentsById(event.target.value).subscribe((data) => {
          this.student = data;
         })
       }
  
 
  deleteStudentDetails(data:any) 
  { 
    this.studentInfo.deleteStudent(data.id).subscribe({ 
      next :(res)=> 
      { 
        alert("Deleted Successfully") 
        console.log(res); 
        location.reload(); 
         
      }, 
      error :(errorData:HttpErrorResponse)=> 
      { 
        console.log(errorData); 
         
      } 
 
    }) 
    console.log(data); 
     
  } 
 
 
 
 
}