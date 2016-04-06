import { Component,OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TodoDashboardService } from './todo-dashboard.service';
import { Todo,TodoListElement } from './todo';

@Component({
	selector: 'todo-dashboard',
	templateUrl: '/static/ng-main/app/templates/todo-dashboard.component.html',
	providers: [
		TodoDashboardService,
		HTTP_PROVIDERS
	]
})

export class TodoDashboardComponent implements OnInit{
	constructor(
		private _todoDashboardService:TodoDashboardService
	){}
	
	private todos : Todo[];
	
	private _errorMessage;
	
	private _getTodos(){
		this._todoDashboardService.getTodos()
									.subscribe(
										data => this.todos = data,
										error => this._errorMessage = <any>error
									);
	}
	
	ngOnInit(){
		this._getTodos();
	}
}