System.register(['angular2/core', 'angular2/http', './auth.service', './login.component', './todo-dashboard.component', './navbar.component'], function(exports_1, context_1) {
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
    var core_1, http_1, auth_service_1, login_component_1, todo_dashboard_component_1, navbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (todo_dashboard_component_1_1) {
                todo_dashboard_component_1 = todo_dashboard_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_authService) {
                    this._authService = _authService;
                    this.title = "Todo";
                    this.isAuthenticated = false;
                }
                AppComponent.prototype._checkAuth = function () {
                    var _this = this;
                    return this._authService.checkAuthentication()
                        .subscribe(function (data) { return ([_this.isAuthenticated = data.status, _this.user = data.fields]); }, function (error) { return _this._AuthErrorMessage = error; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this._checkAuth();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-app',
                        templateUrl: '/static/ng-main/app/templates/app.component.html',
                        directives: [
                            todo_dashboard_component_1.TodoDashboardComponent,
                            login_component_1.LoginComponent,
                            navbar_component_1.NavbarComponent,
                        ],
                        providers: [
                            auth_service_1.AuthService,
                            http_1.HTTP_PROVIDERS,
                        ]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
