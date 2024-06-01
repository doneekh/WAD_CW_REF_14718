import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { GradeService } from '../../../services/grade.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
  router = inject(Router)
  gradeService = inject(GradeService)
  studentService = inject(StudentService)
  id: number;
  tableName: string = ''
  constructor(
    private _mdr: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { id: number, tableName: string }
  ) {
    this.id = data.id;
    this.tableName = data.tableName
  }
  cancelTask() {
    this._mdr.close(false)
  }

  refreshPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.tableName]);
    });
  }

  deleteTask() {
    if(this.tableName === 'grade') {
      this.gradeService.deleteGrade(this.id).subscribe(_ => {
        this.refreshPage()
      })
    }
    if(this.tableName === 'student') {
      this.studentService.deleteStudent(this.id).subscribe(_ => {
        this.refreshPage()
      })
    }
    this._mdr.close(false)
  }
}
