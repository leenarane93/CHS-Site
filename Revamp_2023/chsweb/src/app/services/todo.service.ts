import { Injectable } from '@angular/core';
import { Todo } from '../model/todo/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
    private storageInitialised = false;

    constructor(private storage: Storage) { }

    async getTodos(): Promise<any> {
        return "Get Items";
    }

    async saveTodos(todos: Todo[]) {
        return "Saved";
    }
}