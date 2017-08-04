import { Component } from '@angular/core';

export class HERO {
	id: number;
	name: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	hero: HERO = {
		id: 222,
		name: 'me'
	}
}