import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student, StudentCreate } from '../interfaces/student.interfaces';

const BASE_URL = 'https://localhost:7066/api';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private httpClient = inject(HttpClient);

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${BASE_URL}/Student`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getStudent(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${BASE_URL}/Student/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateStudent(id: number, student: StudentCreate): Observable<void> {
    return this.httpClient.put<void>(`${BASE_URL}/Student/${id}`, student)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteStudent(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${BASE_URL}/Student/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createStudent(student: StudentCreate): Observable<Student> {
    return this.httpClient.post<Student>(`${BASE_URL}/Student`, student)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
