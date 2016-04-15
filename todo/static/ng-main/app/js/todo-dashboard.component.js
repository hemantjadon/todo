System.register(['angular2/core', 'angular2/http', './todo-dashboard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, todo_dashboard_service_1;
    var TodoListComponent, TodoDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (todo_dashboard_service_1_1) {
                todo_dashboard_service_1 = todo_dashboard_service_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoListComponent.prototype, "listElement", void 0);
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list-element',
                        template: "<span class=\"list-element\" contenteditable=true>{{listElement.title}}</span>",
                        styles: [
                            "\n\t\t\tspan[contenteditable=\"true\"]:focus{\n\t\t\t\toutline: none;\n\t\t\t\tborder-bottom: 1px solid black;\n\t\t\t\tborder-top: 1px solid black;\n\t\t\t}\n\t\t\tspan[contenteditable=\"true\"]{\n\t\t\t\tpadding: 3px;\n\t\t\t\tcursor: text;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\tspan[placeholder]:focus{\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\tspan[placeholder]:empty:before {\n\t\t\t\tcontent: attr(placeholder);\n\t\t\t\tcolor:rgb(150,150,150); \n\t\t\t}\n\t\t"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            TodoDashboardComponent = (function () {
                function TodoDashboardComponent(_todoDashboardService, _todoUpdateService) {
                    this._todoDashboardService = _todoDashboardService;
                    this._todoUpdateService = _todoUpdateService;
                }
                TodoDashboardComponent.prototype._getTodos = function () {
                    var _this = this;
                    this._todoDashboardService.getTodos().subscribe(function (data) { return _this.todos = data; }, function (error) { return _this._errorMessage = error; });
                };
                TodoDashboardComponent.prototype._onSelect = function (todo, event) {
                    this._selectedTodo = todo;
                };
                TodoDashboardComponent.prototype._onFocusOut = function (todo, event) {
                    this._todoUpdateService.updateTodo(todo, event);
                };
                TodoDashboardComponent.prototype._handlePlaceholders = function () {
                    var $input = $("[placeholder]");
                    function clearPlaceHolder() {
                        if ($input.text().length == 0) {
                            $input.empty();
                        }
                    }
                    $input.keyup(clearPlaceHolder);
                    $input.click(clearPlaceHolder);
                    $input.change(clearPlaceHolder);
                    $input.bind('input', (clearPlaceHolder));
                };
                TodoDashboardComponent.prototype.ngOnInit = function () {
                    this._getTodos();
                    this._handlePlaceholders();
                };
                TodoDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-dashboard',
                        templateUrl: '/static/ng-main/app/templates/todo-dashboard.component.html',
                        directives: [
                            TodoListComponent
                        ],
                        providers: [
                            todo_dashboard_service_1.TodoUpdateService,
                            todo_dashboard_service_1.TodoDashboardService,
                            http_1.HTTP_PROVIDERS
                        ]
                    }), 
                    __metadata('design:paramtypes', [todo_dashboard_service_1.TodoDashboardService, todo_dashboard_service_1.TodoUpdateService])
                ], TodoDashboardComponent);
                return TodoDashboardComponent;
            }());
            exports_1("TodoDashboardComponent", TodoDashboardComponent);
        }
    }
});
