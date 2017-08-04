import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {HeroService} from '../hero.service'

@Component({
	selector: 'app-province',
	templateUrl: './province.component.html',
	styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

	pro;
	proindex = 0;
	cities;
	citiesindex = 0;
	areaindex = 0;
	data;
	constructor(private heroService:HeroService) {} //依赖注入

	ngOnInit() {
		//获取数据
		this.heroService.getHeroes().subscribe((res) => {
//			console.log(res.json())
this.data = res;
		})
	}
	changeP($event) {
		this.proindex = $event.target.selectedIndex;
		this.citiesindex = 0;
		this.areaindex = 0;
	}
	changeC($event) {
		this.citiesindex = $event.target.selectedIndex;
		this.areaindex = 0;
	}
	changeA($event) {
		this.areaindex = $event.target.selectedIndex;
	}
}