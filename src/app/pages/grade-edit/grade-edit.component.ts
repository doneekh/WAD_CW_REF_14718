import { Component, inject } from '@angular/core';
import { Grade } from '../../../interfaces/grade.interfaces';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from '../../../services/grade.service';
import { ReceptAddEditComponent } from '../../components/grade-add-edit/grade-add-edit.component';

@Component({
  selector: 'app-grade-edit',
  standalone: true,
  imports: [ReceptAddEditComponent],
  templateUrl: './grade-edit.component.html',
  styleUrl: './grade-edit.component.css'
})
export class GradeEditComponent {
  gradeDetail: Grade = {
    id: 0,
    studentId: 0,
    courseName: '',
    courseDescription: '',
    credits: 0,
    instructorName: '',
    assignmentName: '',
    assignmentDescription: '',
    dueDate: '',
    maxPoints: 0,
    pointsEarned: 0,
    enrollmentDate: '',
    finalGrade: '',
  }

  activatedRoute = inject(ActivatedRoute)
  gradeService = inject(GradeService)

  ngOnInit() {
    this.gradeService.getGrade(this.activatedRoute.snapshot.params["id"]).subscribe((grade)=>{
    this.gradeDetail = grade;
    });
  }
}
