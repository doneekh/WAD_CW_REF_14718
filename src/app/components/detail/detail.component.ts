import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input()
  detail: any;

  @Input()
  title: string = ''
  
  detailIter: any;
  description: string = '';
  gradeIter!: any;
  gradeDesc: string = '';
  
  ngOnChanges() {
    this.detailIter = Object.entries(this.detail)
    if (this.detail && this.detail.recept) {
      this.gradeIter = Object.entries(this.detail.recept);
      this.gradeDesc = this.detail.recept.description
    }
  }
}
