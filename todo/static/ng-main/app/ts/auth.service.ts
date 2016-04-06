import { Injectable } from 'angular2/core';
import { Http,Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService{
	constructor(
		private http: Http
	){}

	public checkAuthentication(){
		let check_auth_url: string = window.location.origin+"/api/authentication/check/";
		return this.http.get(check_auth_url)
					.map((response) => (response.json().data))
					.do(data => (console.log(data)))
					.catch(this._handleError);
	}
	
	private _handleError(error: Response){
		console.error(error);
    	return Observable.throw(error.json().error || 'Server error');
	}
}