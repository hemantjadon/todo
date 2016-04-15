System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var TodoDashboardService, TodoUpdateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TodoDashboardService = (function () {
                function TodoDashboardService(http) {
                    this.http = http;
                }
                TodoDashboardService.prototype.getTodos = function () {
                    var url = window.location.origin + "/api/todo/?format=json";
                    return this.http.get(url)
                        .map(function (response) { return (response.json()); })
                        .do(function (data) { return (console.log(data)); })
                        .catch(this._handleError);
                };
                TodoDashboardService.prototype._handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TodoDashboardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoDashboardService);
                return TodoDashboardService;
            }());
            exports_1("TodoDashboardService", TodoDashboardService);
            TodoUpdateService = (function () {
                function TodoUpdateService(http) {
                    this.http = http;
                }
                TodoUpdateService.prototype.getCookie = function (name) {
                    var cookieValue = null;
                    if (document.cookie && document.cookie != '') {
                        var cookies = document.cookie.split(';');
                        for (var i = 0; i < cookies.length; i++) {
                            var cookie = jQuery.trim(cookies[i]);
                            // Does this cookie string begin with the name we want?
                            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                break;
                            }
                        }
                    }
                    return cookieValue;
                };
                TodoUpdateService.prototype._updateTitle = function (todo) {
                    var csrftoken = this.getCookie('csrftoken');
                    var url = window.location.origin + "/api/todo/" + todo.id + "/update/?format=json";
                    var put_obj = JSON.stringify({ title: todo.title });
                    var headers = new http_1.Headers({
                        'X-CSRFToken': csrftoken,
                        'Content-Type': 'application/json'
                    });
                    return this.http.put(url, put_obj, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(this._handleError);
                };
                TodoUpdateService.prototype.updateTodo = function (todo, event) {
                    this._updateTitle(todo).subscribe();
                    console.log(event);
                };
                TodoUpdateService.prototype._handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TodoUpdateService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoUpdateService);
                return TodoUpdateService;
            }());
            exports_1("TodoUpdateService", TodoUpdateService);
        }
    }
});
