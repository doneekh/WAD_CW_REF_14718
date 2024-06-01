import { Component } from '@angular/core';
import { ReceptAddEditComponent } from '../../components/grade-add-edit/grade-add-edit.component';

@Component({
  selector: 'app-grade-create',
  standalone: true,
  imports: [ReceptAddEditComponent],
  templateUrl: './grade-create.html',
  styleUrl: './grade-create.css'
})
export class GradeCreateComponent {

}
