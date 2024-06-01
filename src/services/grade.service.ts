import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade, GradeCreate } from '../interfaces/grade.interfaces';

const BASE_URL = 'https://localhost:7066/api'
@Injectable({
  providedIn: 'root'
})
export class GradeService {
  httpClient = inject(HttpClient);

  getGrades(): Observable<Grade[]> {
    return this.httpClient.get<Grade[]>(`${BASE_URL}/Grade`)
  };

  getGrade(id: number): Observable<Grade>{
    return this.httpClient.get<Grade>(`${BASE_URL}/Grade/${id}`);
  };

  updateGrade(id: number, grade: GradeCreate){
    return this.httpClient.put(`${BASE_URL}/Grade/${id}`, grade);  
  };

  deleteGrade(id:number){
    return this.httpClient.delete(`${BASE_URL}/Grade/${id}`);
  };
  
  createGrade(grade: GradeCreate): Observable<Grade>{
    return this.httpClient.post<Grade>(`${BASE_URL}/Grade`, grade);
  };
}