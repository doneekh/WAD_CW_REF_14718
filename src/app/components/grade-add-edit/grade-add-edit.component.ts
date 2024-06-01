import { Component, Input, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Grade, GradeCreate } from '../../../interfaces/grade.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../../../services/grade.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-grade-add-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule, MatCheckboxModule],
  templateUrl: './grade-add-edit.component.html',
  styleUrl: './grade-add-edit.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ReceptAddEditComponent {
  @Input()
  receptDetail!: Grade;

  @Input()
  isEdit: boolean = false

  router = inject(Router)
  gradeService = inject(GradeService)
  activatedRoute = inject(ActivatedRoute)

  createGrade: GradeCreate = {
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
  errorObj: any;


  ngOnChanges() {
    this.createGrade = this.receptDetail;
  }

  clearForm() {
    this.createGrade = {
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
  }

  submitForm() {
    if (this.isEdit) {
      this.gradeService.updateGrade(this.activatedRoute.snapshot.params["id"], this.createGrade).subscribe(_ => {
        alert("Grade Updated")
        this.router.navigateByUrl("grade");
      },
        error => {
          this.errorObj = error.error.errors;
        })
    } else {
      this.gradeService.createGrade(this.createGrade).subscribe(_ => {
        alert("Grade created")
        this.router.navigateByUrl("grade")
      },
        error => {
          this.errorObj = error.error.errors;
        });
    }
  }
}
