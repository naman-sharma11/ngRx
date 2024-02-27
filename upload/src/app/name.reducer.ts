import { createReducer, on } from '@ngrx/store';
import { update, reset } from './name.actions';

export const initialState = 0;

export const nameReducer = createReducer(
  initialState,
  on(update, (state) => state + 1),
  on(reset, (state) => 0)
);