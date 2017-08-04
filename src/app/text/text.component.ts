import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
	leftletters:number = 100;
  constructor() { }

  ngOnInit() {
  }
  getcount($event:any){
  	console.log($event.target.value)
  	this.leftletters = 100-$event.target.value.length
  }
}
