import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'




@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	
	selectedHero:Hero;
	heroes:Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
	title:string = 'tour of heros'
	
  constructor() { }

  ngOnInit() {
  }
  selecthero(hero:Hero):void{
  	console.log(hero);
  	this.selectedHero = hero;
  }
}
