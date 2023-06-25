import { createReducer, on } from '@ngrx/store';
import {
    addTodo,
    removeTodo,
    loadTodos,
    loadTodosSuccess,
    loadTodosFailure,
} from './test.actions';
import { Todo } from '../../../model/todo/todo.model';

export interface TodoState {
    todos: Todo[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
    todos: [],
    error: "",
    status: 'pending',
};

export const todoReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new todo to the todos array
    on(addTodo, (state, { content }) => ({
        ...state,
        todos: [...state.todos, { id: Date.now().toString(), content: content }],
    })),
    // Remove the todo from the todos array
    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
    })),
    // Trigger loading the todos
    on(loadTodos, (state) => ({ ...state, status: <const>'loading' })),
    // Handle successfully loaded todos
    on(loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos: todos,
        error: "",
        status: <const>'loading',
    })),
    // Handle todos load failure
    on(loadTodosFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: <const>'error',
    }))
);