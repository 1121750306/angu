import { Injectable } from '@angular/core';
import { Http,Jsonp } from '@angular/http';
//import { Jsonp } from '@angular/jsonp';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable() //可以调用其他service
export class HeroService {

	constructor(private http: Http,private jsonp:Jsonp) {}

	getHeroes(): Observable < any[] > {
		return this.http.get('http://localhost:4200/assets/region.json').map((res) => res.json());
	}
//	getHeroes():Promise<any[]>{
//		return this.http.get('api/heros').toPromise().then(res=>res.json());
//	}
	
	getphoneinfo(phone:string):Observable<any>{
		return this.jsonp.get(`http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=${phone}&callback=JSONP_CALLBACK`).map((res) => res.json());
	}
}