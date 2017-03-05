import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses';
import { CourseDetailedComponent } from './pages/course-detailed';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses', component: CoursesComponent },
  { path: 'course', component: CourseDetailedComponent },
  { path: '**',    component: NoContentComponent }
];
