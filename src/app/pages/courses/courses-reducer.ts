import { ActionReducer, Action } from '@ngrx/store';

export const ADD_COURSES = 'ADD_COURSES';
export const ADD_COURSE = 'ADD_COURSE';
export const EDIT_COURSE = 'EDIT_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';

const INITIAL_STATE = [];

export function coursesReducer(state: Array<any> = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case ADD_COURSES:
      return action.payload;
    case ADD_COURSE:
      return [...state, action.payload];

    case EDIT_COURSE:
      return [...state, action.payload];

    case DELETE_COURSE:
      const [first, ...rest] = state;
      return rest;

    default:
      return state;
  }
}
