import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

import { Course } from '../../shared/course-interface';
import { CoursesService } from '../../shared/courses.service';

@Component({
  selector: 'course',
  styleUrls: [ './course.scss' ],
  templateUrl: './course.html'
})

export class CourseComponent implements OnInit {
  public courseData: Course = {
    title: '',
    description: '',
    duration: 0,
    date: new Date().toISOString(),
    authors: []
  };
  public isEdit: boolean = false;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        const id = params['id'];

        if (id !== 'new') {
          this.isEdit = true;
          this.coursesService.getCourseById(+id)
            .then((course) => this.courseData = course);
        }
      });
  }

  public addCourse(): void {
    this.coursesService.addCourse(this.courseData)
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }

  public updateCourse(): void {
    this.coursesService.updateCourse(this.courseData)
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }

  private onSuccess(): void {
    this.router.navigate([ '/courses' ]);
    this.coursesService.get();
  }

  private onFail(res): void {
    console.error(JSON.parse(res._body).error.message);
  }
}
