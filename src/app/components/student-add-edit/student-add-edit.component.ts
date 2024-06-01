import { Component, Input, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Student, StudentCreate } from '../../../interfaces/student.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { GradeService } from '../../../services/grade.service';
import { Grade } from '../../../interfaces/grade.interfaces';

@Component({
  selector: 'app-student-add-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './student-add-edit.component.html',
  styleUrl: './student-add-edit.component.css',
  providers: [provideNativeDateAdapter()],
})
export class StudentAddEditComponent {
  @Input()
  studentDetail!: Student;

  @Input()
  isEdit: boolean = false

  router = inject(Router)
  studentService = inject(StudentService)
  gradeService = inject(GradeService)
  activatedRoute = inject(ActivatedRoute)

  createStudent: StudentCreate = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    classYear: '',
  }
  errorObj: any;
  grades: Grade[] = [];
  gradeId: number | null = null;


  ngOnInit() {
    this.gradeService.getGrades().subscribe((data) => {
      this.grades = data
    });
  }

  ngOnChanges() {
    this.createStudent = this.studentDetail;
  }

  clearForm() {
    this.createStudent = {
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      classYear: '',
    }
  }

  submitForm() {
    if (this.isEdit) {
      this.studentService.updateStudent(this.activatedRoute.snapshot.params["id"], this.createStudent).subscribe(_ => {
        alert("Student Updated")
        this.router.navigateByUrl("student");
      },
        error => {
          this.errorObj = error.error.errors;
        })
    } else {
      this.studentService.createStudent(this.createStudent).subscribe(_ => {
        alert("Student created")
        this.router.navigateByUrl("student")
      },
        error => {
          this.errorObj = error.error.errors;
        });
    }
  }
}
