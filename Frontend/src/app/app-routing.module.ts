import { GradeByIdComponent } from './pages/grades/grade-by-id/grade-by-id.component';
import { EnrollmentsComponent } from './pages/students/enrollments/enrollments.component';
import { GradesComponent } from './pages/grades/grades.component';
import { Grades } from './models/grades';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'students', component: StudentsComponent, title: 'Students' },
  {
    path: 'students/enrollments',
    component: EnrollmentsComponent,
    title: 'Enrollments',
  },

  { path: 'teachers', component: TeachersComponent, title: 'Teachers' },
  { path: 'courses', component: CoursesComponent, title: 'Courses' },
  { path: 'subjects', component: SubjectsComponent, title: 'Subjects' },
  {
    path: 'grades',
    component: GradesComponent,
    title: 'Grades',
  },

  { path: 'grades/byid/:id', component: GradeByIdComponent, title: 'Grade' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
