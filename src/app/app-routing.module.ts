import { CreateStudentComponent } from './create-student/create-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path: 'table',
    component: TableComponent
  },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  {
    path: 'addstudent',
    component: CreateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
