import { Injectable } from 'angular2/core';
import { Http,Response,Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Todo,TodoListElement } from './todo';

@Injectable()
export class TodoDashboardService{
	constructor(
		private http: Http
	){}
	
	public getTodos(){
		let url = window.location.origin+"/api/todo/?format=json";
		return this.http.get(url)
						.map((response) => (response.json()))
						.do(data => (console.log(data)))
						.catch(this._handleError);
	}
	
	private _handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}

@Injectable()
export class TodoUpdateService{
	constructor(
		private http: Http
	){}
	
	private getCookie(name) {
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
	}
	private _updateTitle(todo: Todo){
		let csrftoken = this.getCookie('csrftoken');
		let url = window.location.origin+"/api/todo/"+todo.id+"/update/?format=json";
		let put_obj = JSON.stringify({ title : todo.title });
		let headers = new Headers({
			'X-CSRFToken': csrftoken,
			'Content-Type':'application/json'
		})
		return this.http.put(url,put_obj,{headers:headers})
						.map(response => response.json())
						.catch(this._handleError);
	}
	
	private _updateListElement
	public updateTodo(todo: Todo,event: Event){
		this._updateTitle(todo).subscribe();
		console.log(event);
	}                   
	
	private _handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}