import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {HeroService} from '../hero.service'
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-obseverbal',
  templateUrl: './obseverbal.component.html',
  styleUrls: ['./obseverbal.component.css']
})
export class ObseverbalComponent implements OnInit {
	//定义一个被观察者对象observable
	obsevable = new Subject(); 
	myphon:phone;
	my={a:2}
  constructor(private heroservice:HeroService) { }

  ngOnInit() {
  	this.obsevable.debounceTime(1500).subscribe((str)=>{console.log(str)})
  }
  sendData(str:string):void{
  	//发送变化
  	this.obsevable.next(str);
  }
  getphoneinfo(str:string):void{
  	this.heroservice.getphoneinfo(str).subscribe((res)=>{
//		console.log(res);
  		this.myphon = res;
  		console.log(this.myphon)
  	})
  }
}
export class phone{
	catName:string;
	province:string;
}
