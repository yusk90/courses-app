import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET
} from '@angular/router';
import 'rxjs/add/operator/filter';

import { CoursesService } from '../../../shared/courses.service';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'breadcrumbs',
  styleUrls: [ './breadcrumbs.scss' ],
  templateUrl: './breadcrumbs.html'
})

export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[];
  public root;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  public ngOnInit() {
    console.log('routerState', this.router.routerState);
    this.router.events.filter((event) => event instanceof NavigationEnd).subscribe((event) => {
      let root: ActivatedRoute = this.activatedRoute.root;
      this.root = root;
      console.log('root', root);
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

    let children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');

      url += `/${routeURL}`;

      let breadcrumbTitle = child.snapshot.data[ROUTE_DATA_BREADCRUMB];

      let breadcrumb: IBreadcrumb = {
        label: breadcrumbTitle,
        params: child.snapshot.params,
        url
      };

      if (breadcrumbTitle === 'Child course') {
        const course = this.coursesService.getState().courses
                            .find((course) => course.id === +breadcrumb.params['id']);

        breadcrumb.label = course.title;
      }
      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
