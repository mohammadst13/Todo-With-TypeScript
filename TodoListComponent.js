// view
System.register(["//code.jquery.com/jquery-1.12.1.min.js"], function (exports_1, context_1) {
    "use strict";
    var TodoListComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {// view
            TodoListComponent = /** @class */ (function () {
                function TodoListComponent(el) {
                    this.$el = $(el);
                }
                TodoListComponent.prototype.render = function (todos) {
                    this.$el.html('');
                    if (!todos.length) {
                        this.$el.html("<div class='list-group-item text-center text-giant'>" +
                            "    <strong>You've completed everything you needed to do!</strong>" +
                            "</div>");
                        return;
                    }
                    for (var index in todos) {
                        var todo = todos[index];
                        this.renderTodo(todo).appendTo(this.$el);
                    }
                };
                TodoListComponent.prototype.renderTodo = function (todo) {
                    return $("<div class='todo-item list-group-item " + (todo.state == 2 ? 'completed' : '') + "'>" +
                        "   <div class='row'>" +
                        "       <div class='col-md-2 text-center'>" +
                        "           <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>" +
                        "           <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>" +
                        "       </div>" +
                        "       <div class='col-md-10'>" +
                        "            <span class='incomplete text-giant'>" + todo.name + "</span>" +
                        "            <span class='completed text-strikethrough text-muted text-giant'>" + todo.name + "</span>" +
                        "        </div>" +
                        "    </div>" +
                        "    <div class='clearfix'></div>" +
                        "</div>").on('click', function () {
                        var event = document.createEvent('CustomEvent');
                        event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
                        this.dispatchEvent(event);
                    });
                };
                return TodoListComponent;
            }());
            exports_1("default", TodoListComponent);
        }
    };
});
