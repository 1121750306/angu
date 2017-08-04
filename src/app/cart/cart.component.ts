import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	products: Product[] = [{
		id: 1,
		img: 'Desert.jpg',
		count: 1,
		price: 10,
		selected: true
	}, {
		id: 2,
		img: 'Hydrangeas.jpg',
		count: 1,
		price: 20,
		selected: true
	}, {
		id: 3,
		img: 'Jellyfish.jpg',
		count: 1,
		price: 30,
		selected: true
	}, {
		id: 4,
		img: 'Penguins.jpg',
		count: 1,
		price: 40,
		selected: true
	}]

	constructor() {}

	ngOnInit() {}
	des(p: Product): void {
		if(p.count > 1) {
			p.count--;
		}
	}
	add(p: Product): void {
		p.count++
	}
	changestate($event: any, p: Product): void {
		p.selected = $event.target.checked;
		console.log(p.selected)
	}
	getsum(): number {
		let sum: number = 0;
		for(let p of this.products) {
			if(p.selected) {
				sum += p.price * p.count
			}
		}
		return sum;
	}

}
export class Product {
	id: number;
	img: string;
	count: number;
	price: number;
	selected: boolean;
}