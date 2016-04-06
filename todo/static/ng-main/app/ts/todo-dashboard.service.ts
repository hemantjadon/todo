import { Injectable } from 'angular2/core';
import { Http,Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDashboardService{
	constructor(
		private http: Http
	){}
	
	public getTodos(){
		let url = window.location.origin+"/api/todo/?format=json" 
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