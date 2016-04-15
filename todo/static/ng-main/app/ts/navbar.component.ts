import { Component,OnInit } from 'angular2/core';

@Component({
	selector: 'nav-bar',
	templateUrl: '/static/ng-main/app/templates/navbar.component.html',
})
export class NavbarComponent implements OnInit{
	ngOnInit(){
		$("#tooltipped").tooltip({delay : 50});
	}
}