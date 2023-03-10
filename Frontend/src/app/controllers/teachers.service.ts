import { Teachers, TeacherAdd, TeacherUpdate } from './../models/teachers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor(private http: HttpClient, private globalService: GlobalService) {}

  add(Teacher: TeacherAdd): Observable<TeacherAdd> {
    const apiURL = `${this.globalService.URL}/Teachers/Add`;

    return this.http
      .post<TeacherAdd>(apiURL, Teacher)
      .pipe(retry(1), catchError(this.globalService.errorHandler));
  }

  getAll(): Observable<Teachers[]> {
    const apiURL = `${this.globalService.URL}/Teachers/GetAll`;

    return this.http
      .get<Teachers[]>(apiURL)
      .pipe(retry(1), catchError(this.globalService.errorHandler));
  }

  getById(Id: number): Observable<Teachers> {
    const apiURL = `${this.globalService.URL}/Teachers/GetById/${Id}`;

    return this.http
      .get<Teachers>(apiURL, this.globalService.httpOptions)
      .pipe(retry(1), catchError(this.globalService.errorHandler));
  }

  updateById(Teacher: TeacherUpdate): Observable<TeacherUpdate> {
    const apiURL = `${this.globalService.URL}/Teachers/UpdateById`;

    return this.http
      .put<TeacherUpdate>(apiURL, Teacher, this.globalService.httpOptions)
      .pipe(retry(1), catchError(this.globalService.errorHandler));
  }

  deleteById(Id: number): Observable<Teachers> {
    const apiURL = `${this.globalService.URL}/Teachers/DeleteById/${Id}`;

    return this.http
      .delete<Teachers>(apiURL, this.globalService.httpOptions)
      .pipe(retry(1), catchError(this.globalService.errorHandler));
  }
}
