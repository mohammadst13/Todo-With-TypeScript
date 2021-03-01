System.register(["./TodoService", "./TodoListComponent"], function (exports_1, context_1) {
    "use strict";
    var TodoService_1, TodoListComponent_1, TodoApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (TodoListComponent_1_1) {
                TodoListComponent_1 = TodoListComponent_1_1;
            }
        ],
        execute: function () {
            TodoApp = /** @class */ (function () {
                function TodoApp(el, todos) {
                    this.todoService = new TodoService_1.default(todos);
                    this.initialize(el);
                }
                TodoApp.prototype.addTodo = function (todoName) {
                    this.todoService.add(todoName);
                    this.renderTodos();
                };
                TodoApp.prototype.clearCompleted = function () {
                    this.todoService.clearCompleted();
                    this.renderTodos();
                };
                TodoApp.prototype.toggleTodoState = function (todoId) {
                    console.log(todoId);
                    this.todoService.toggle(todoId);
                    this.renderTodos();
                };
                TodoApp.prototype.renderTodos = function () {
                    var todos = this.todoService.getAll();
                    this.todoList.render(todos);
                };
                TodoApp.prototype.initialize = function (el) {
                    var _this = this;
                    var addTodoFormEl = el.getElementsByClassName("add-todo")[0], addTodoNameEl = addTodoFormEl.getElementsByTagName("input")[0], todoListEl = el.getElementsByClassName("todo-list")[0], clearCompletedEl = el.getElementsByClassName("clear-completed")[0];
                    addTodoFormEl.addEventListener("submit", function (evnt) {
                        _this.addTodo(addTodoNameEl.value);
                        addTodoNameEl.value = "";
                        evnt.preventDefault();
                    });
                    todoListEl.addEventListener("todo-toggle", function (evnt) {
                        console.log(evnt);
                        var todoId = evnt.detail.todoId;
                        _this.todoService.toggle(todoId);
                        _this.renderTodos();
                    });
                    clearCompletedEl.addEventListener("click", function () {
                        _this.clearCompleted();
                    });
                    this.todoList = new TodoListComponent_1.default(todoListEl);
                    this.renderTodos();
                };
                return TodoApp;
            }());
            exports_1("TodoApp", TodoApp);
        }
    };
});
