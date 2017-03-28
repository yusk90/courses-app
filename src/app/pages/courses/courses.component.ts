import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { DatePipe } from '@angular/common';

import { Course } from '../../shared/course-interface';
import { CoursesService } from '../../shared/courses.service';

@Component({
  selector: 'courses',
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit {
  @ViewChild('deleteModal')
  public deleteModal;

  public courses: Course[];
  public courseIdForDelete: number;
  private cachedCourses: Course[];

  constructor(
    private coursesService: CoursesService,
    private datePipe: DatePipe
  ) {}

  public ngOnInit() {
    this.coursesService.getCourses().then((courses) => {
      this.courses = this.prepareCourses(courses);
      this.cacheCourses();
    });
  }

  public filter(query: string): void {
    const properties = [ 'title', 'displayDate' ];

    this.courses = query ? this.filterBy(properties, query) : this.cachedCourses;
  }

  public deleteCourse(id: number): void {
    this.deleteModal.hide();
    this.courses.splice(this.courses.findIndex((course) => course.id === id), 1);
    this.coursesService.deleteCourse(id);
  }

  public openDeleteModal(id: number): void {
    this.courseIdForDelete = id;
    this.deleteModal.show();
  }

  private prepareCourses(courses) {
    return courses.map((course: Course) => {
      const preparedCourse = Object.assign({}, course);

      preparedCourse.displayDate = this.datePipe.transform(course.date, 'dd-MM-yyyy');
      return preparedCourse;
    });
  }

  private filterBy(properties: string[], query: string): Course[] {
    return this.courses.filter((course: Course) => {
      return properties.some((property) => course[property].search(query) > -1);
    });
  }

  private cacheCourses(): void {
    this.cachedCourses = this.courses;
  }
}
