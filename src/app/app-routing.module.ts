import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HerosComponent } from './heros/heros.component'
import { HeroeditComponent } from './heroedit/heroedit.component'
import { FormsComponent } from './forms/forms.component'

const routes: Routes = [
  {
  	path: '',
  	redirectTo:'/heros',
  	pathMatch:'full'
  },
  {
    path: 'cart',
    component:CartComponent
  },{
  	path: 'heros',
  	component:HerosComponent
//	children:[{
//		
//	}]
  },{
  	path:'heroedit/:id',
  	component:HeroeditComponent
  },
  {
    path: 'forms',
    component:FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
