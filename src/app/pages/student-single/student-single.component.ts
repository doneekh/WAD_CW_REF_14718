import { Component, inject } from '@angular/core';
import { Student } from '../../../interfaces/student.interfaces';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-student-single',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './student-single.component.html',
  styleUrl: './student-single.component.css'
})
export class StudentSingleComponent {
  studentDetail: Student = {
    id: 1,
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
