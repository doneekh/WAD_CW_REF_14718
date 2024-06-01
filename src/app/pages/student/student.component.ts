import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../interfaces/student.interfaces';
import { DataKeys } from '../../types';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  router = inject(Router);
  studentService = inject(StudentService);
  students: Student[] = [];

  async ngOnInit() {
    this.studentService.getStudents().subscribe(
      (data) => {
        console.log(data);
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  displayedColumns: DataKeys[] = [
    {
      label: "FirstName",
      key: 'firstName'   
    },
    {
      label: "LastName",
      key: 'lastName'   
    },
    {
      label: "Email",
      key: 'email'   
    },
    {
      label: "Date of birth",
      key: 'dateOfBirth'   
    },
    {
      label: "Gender",
      key: 'gender'   
    },
    {
      label: "Class year",
      key: 'classyear'   
    },
  ];
}
