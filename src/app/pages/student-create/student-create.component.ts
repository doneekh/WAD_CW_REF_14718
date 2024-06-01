import { Component } from '@angular/core';
import { StudentAddEditComponent } from '../../components/student-add-edit/student-add-edit.component';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [StudentAddEditComponent],
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {

}
