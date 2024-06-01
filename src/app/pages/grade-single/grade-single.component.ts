import { Component, inject } from '@angular/core';
import { Grade } from '../../../interfaces/grade.interfaces';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from '../../../services/grade.service';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-grade-single',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './grade-single.component.html',
  styleUrl: './grade-single.component.css'
})
export class GradeSingleComponent {
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
