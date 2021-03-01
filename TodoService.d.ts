interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
declare enum TodoState {
    Active = 1,
    Complete = 2
}
interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
declare class TodoService implements ITodoService {
    private static _lastId;
    private todos;
    constructor(todos: string[]);
    private static generateTodoId;
    private static clone;
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    private _find;
    toggle(todoId: number): void;
}
