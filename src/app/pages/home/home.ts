import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  studentId: number = 14718;
  result: number = 69;
  remainder: number = 4;
  
  calculateResult() {
    this.result = Math.floor(this.studentId / 20);
    this.remainder = this.studentId % 20;
  }
}
