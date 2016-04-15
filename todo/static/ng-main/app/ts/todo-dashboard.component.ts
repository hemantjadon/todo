import { Component,OnInit,Input } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TodoDashboardService,TodoUpdateService } from './todo-dashboard.service';
import { Todo,TodoListElement } from './todo';

@Component({
	selector:'todo-list-element',
	template: `<span class="list-element" contenteditable=true>{{listElement.title}}</span>`,
	styles: [
		`
			span[contenteditable="true"]:focus{
				outline: none;
				border-bottom: 1px solid black;
				border-top: 1px solid black;
			}
			span[contenteditable="true"]{
				padding: 3px;
				cursor: text;
				display: block;
			}
			span[placeholder]:focus{
				display: block;
			}
			span[placeholder]:empty:before {
				content: attr(placeholder);
				color:rgb(150,150,150); 
			}
		`
	]
})
class TodoListComponent{
	@Input() listElement: TodoListElement;
}

@Component({
	selector: 'todo-dashboard',
	templateUrl: '/static/ng-main/app/templates/todo-dashboard.component.html',
	directives: [
		TodoListComponent
	],
	providers: [
		TodoUpdateService,
		TodoDashboardService,
		HTTP_PROVIDERS
	]
})

export class TodoDashboardComponent implements OnInit{
	constructor(
		private _todoDashboardService:TodoDashboardService,
		private _todoUpdateService: TodoUpdateService
	){}
	
	private todos : Todo[];
	
	private _selectedTodo : Todo;
	
	private _errorMessage;
	
	private _getTodos(){
		this._todoDashboardService.getTodos().subscribe( data => this.todos = data,
														 error => this._errorMessage = <any>error);
	}
	
	private _onSelect(todo: Todo,event: Event){
		this._selectedTodo = todo;
	}
	
	private _onFocusOut(todo: Todo,event: Event){
		this._todoUpdateService.updateTodo(todo,event);
	}
	
	private _handlePlaceholders(){
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
	}
	
	ngOnInit(){
		this._getTodos();
		this._handlePlaceholders();
	}
}