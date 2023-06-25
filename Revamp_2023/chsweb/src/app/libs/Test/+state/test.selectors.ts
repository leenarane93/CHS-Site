import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { TodoState } from './test.reducer';

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
    selectTodos,
    (state: TodoState) => state.todos
);