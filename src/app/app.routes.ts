import { Routes } from '@angular/router';

import { AuthGuard } from './shared/auth-guard.service';
import { CoursesComponent } from './pages/courses';
import { CourseDetailedComponent } from './pages/course-detailed';
import { NoContentComponent } from './pages/no-content';
import { LoginComponent } from './pages/login';
import { NewCourseComponent } from './pages/new-course';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses', canActivate: [ AuthGuard ] },
  { path: 'courses', component: CoursesComponent, canActivate: [ AuthGuard ] },
  { path: 'courses/new', component: NewCourseComponent, canActivate: [ AuthGuard ] },
  { path: 'courses/:id', component: CourseDetailedComponent, canActivate: [ AuthGuard ]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoContentComponent, canActivate: [ AuthGuard ] }
];
