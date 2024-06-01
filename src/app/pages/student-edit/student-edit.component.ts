import { Component, inject } from '@angular/core';
import { StudentAddEditComponent } from '../../components/student-add-edit/student-add-edit.component';
import { Student } from '../../../interfaces/student.interfaces';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [StudentAddEditComponent],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})
export class StudentEditComponent {
  studentDetail: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    classYear: '',
  }

  activatedRoute = inject(ActivatedRoute)
  studentService = inject(StudentService)

  ngOnInit() {
    this.studentService.getStudent(this.activatedRoute.snapshot.params["id"]).subscribe((student)=>{
    this.studentDetail = student;
    });
  }
}
