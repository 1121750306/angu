import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router'
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-heroedit',
  templateUrl: './heroedit.component.html',
  styleUrls: ['./heroedit.component.css']
})
export class HeroeditComponent implements OnInit {
//	hero:Hero;
	pro;
  constructor(private route:ActivatedRoute,private heroservice:HeroService) { }

  ngOnInit() {
  	//获取路由参数
//	console.log(this.route.snapshot.queryParams['id']);
  	this.route.params.subscribe((params:Params)=>{
  		console.log(params['id']);
  		console.log(this.heroservice.getHeroes().subscribe((res)=>{
  		this.pro = res[params['id']]
  		console.log(this.pro)
  		}))
  	})
  }

}
