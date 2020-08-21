import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentdetailes: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.studentdetailes = new FormGroup({
      Name: new FormControl(''),
      lastName: new FormControl(''),
      Class: new FormControl(''),
      Year_of_passing: new FormControl(''),
      Percentage_of_marks: new FormControl(''),
    });
  }

  onSubmit() {
    this.router.navigate(['table']);
    console.log(this.studentdetailes.value);
  }

}
