import { Injectable } from '@angular/core';

interface FilterConfig {
  order?: { field: string, asc: boolean };
  pagination?: { limit?: number, skip: number };
  search?: { query: string };
}

const DEFAULT_FILTER: FilterConfig = {
  order: { field: 'date', asc: false },
  search: { query: '' }
};

@Injectable()
export class CoursesFilterService {
  public buildFilterQuery(filterConfig?: FilterConfig): string {
    const filters = {};
    const { query } = filterConfig.search || DEFAULT_FILTER.search;
    const { field, asc } = filterConfig.order || DEFAULT_FILTER.order;

    Object.assign(filters,
                  query && this.buildSearchFilterObject(query),
                  this.buildOrderFilterObject(field, asc));

    if (filterConfig.pagination) {
      const { limit, skip } = filterConfig.pagination;

      Object.assign(filters, this.buildPaginationFilterObject(limit, skip));
    }

    return `&filter=${ JSON.stringify(filters) }`;
  }

  public buildCountFilterQuery(query: string) {
    return `&where=${ JSON.stringify({ or: this.buildSearchFilterArray(query) }) }`;
  }

  private buildSearchFilterObject(query: string) {
    return { where: { or: this.buildSearchFilterArray(query) } };
  }

  private buildSearchFilterArray(query: string) {
    const properties = [ 'title', 'description' ];

    return properties.map((field) => {
      return {
        [field]: {
          like: query
        }
      };
    });
  }

  private buildPaginationFilterObject(limit: number, skip: number) {
    return { limit, skip };
  }

  private buildOrderFilterObject(field: string, asc: boolean) {
    return { order: `${ field } ${ asc ? 'ASC' : 'DESC' }` };
  }
}
