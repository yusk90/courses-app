import { Routes } from '@angular/router';

import { AuthGuard } from './shared/auth-guard.service';
import { CoursesComponent } from './pages/courses';
import { CourseDetailedComponent } from './pages/course-detailed';
import { NoContentComponent } from './pages/no-content';
import { LoginComponent } from './pages/login';
import { CourseComponent } from './pages/course';

export const ROUTES: Routes = [
  { path: 'courses', component: CoursesComponent, canActivate: [ AuthGuard ], data: { breadcrumb: 'Courses'},
    children: [
      { path: ':id', component: CourseComponent, canActivate: [ AuthGuard ], data: { breadcrumb: 'Child course'} }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'courses', canActivate: [ AuthGuard ] },
  { path: '**', component: NoContentComponent, canActivate: [ AuthGuard ] }
];
