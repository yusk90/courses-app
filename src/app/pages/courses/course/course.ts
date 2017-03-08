interface CourseInterface {
  id: number;
  name: string;
  duration: string;
  date: string;
  description: string;
}

export class Course implements CourseInterface {
  public id: number;
  public name: string;
  public duration: string;
  public date: string;
  public description: string;

  constructor(course: CourseInterface) {
    this.id = course.id;
    this.name = course.name;
    this.duration = course.duration;
    this.date = course.date;
    this.description = course.description;
  }
}
