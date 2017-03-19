import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses';
import { CourseDetailedComponent } from './pages/course-detailed';
import { NoContentComponent } from './pages/no-content';
import { LoginComponent } from './pages/login';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailedComponent },
  { path: 'login', component: LoginComponent },
  { path: '**',    component: NoContentComponent }
];
