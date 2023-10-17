import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AppComponent } from './app.component';
import { ViewDataComponent } from './view-data/view-data.component';


const routes: Routes = [
  {
    path : "view",
    component: ViewDataComponent
  },
  {
  path : "update",
  component: UpdateStudentComponent
},
{
  path : "add",
  component : AddStudentComponent
},
{
  path : "remove",
  component : DeleteStudentComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
