import { Component,OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { TodoDashboardComponent } from './todo-dashboard.component';
import { NavbarComponent } from './navbar.component';

@Component({
	selector: 'ng-app',
	templateUrl: '/static/ng-main/app/templates/app.component.html',
	directives: [
		TodoDashboardComponent,
		LoginComponent,
		NavbarComponent,
	],
	providers: [
		AuthService,
		HTTP_PROVIDERS,
	]
})

export class AppComponent implements OnInit{
	constructor(
		private _authService:AuthService
	){}
	
	public title : string = "Todo";
	
	public isAuthenticated : boolean = false;
	
	public user: Object;
	
	private _AuthErrorMessage: string;
	
	private _checkAuth(){
		return this._authService.checkAuthentication()
			.subscribe(
				data => ([this.isAuthenticated = data.status,this.user = data.fields]),
				error => this._AuthErrorMessage = <any>error
			);
	}
	
	ngOnInit(){
		this._checkAuth();
	}
}