import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  studentlist: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentlist = [
      {
        name: 'Rajiv',
        marks: {
          Maths: '18',
          English: '21',
          Science: '45',
          total: '84',
        },
        rollNumber: 'KV2017-5A2',
        Status: 'fail'
      },
      {
        name: 'Abhishek',
        marks: {
          Maths: '43',
          English: '30',
          Science: '37',
          total: '110',

        },
        rollNumber: 'KV2017-5A1',
        Status: 'pass'

      },
      {
        name: 'Zoya',
        marks: {
          Maths: '42',
          English: '31',
          Science: '50',
          total: '123',

        },
        rollNumber: 'KV2017-5A3',
        Status: 'topper'

      }
    ];
  }
  gotocreatstudent() {
    this.router.navigate(['addstudent']);
  }


//   $(document).ready(function () {
// $('#dtBasicExample').DataTable();
// $('.dataTables_length').addClass('bs-select');
// });

}
