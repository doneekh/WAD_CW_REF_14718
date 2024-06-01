import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GradeService } from '../../../services/grade.service';
import { Grade } from '../../../interfaces/grade.interfaces';
import { DataKeys } from '../../types';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './grade.html',
  styleUrl: './grade.css'
})
export class GradesComponent {
  router = inject(Router)
  gradeService = inject(GradeService)
  grades: Grade[] = []

  ngOnInit(){
    this.gradeService.getGrades().subscribe((data)=>{
      this.grades = data;
    });
  }

  displayedColumns: DataKeys[] = [
    {
      label: "Course Name",
      key: 'courseName'   
    },
    {
      label: "Course Description",
      key: 'courseDescription'   
    },
    {
      label: "Date to",
      key: 'dueDate'   
    },
    {
      label: "Credits",
      key: 'credits'   
    },
    {
      label: "Instructor Name",
      key: 'instructorName'   
    },
    {
      label: "Assignment Name",
      key: 'assignmentName'   
    },
    {
      label: "Assignment Description",
      key: 'assignmentDescription'   
    },
    {
      label: "Max Points",
      key: 'maxPoints'   
    },
    {
      label: "Points Earned",
      key: 'pointsEarned'   
    },
    {
      label: "Enrollment Date",
      key: 'enrollmentDate'   
    },
    {
      label: "Final Grade",
      key: 'finalGrade'   
    },
    {
      label: "Student Id",
      key: "studentId"
    }
  ];
}
