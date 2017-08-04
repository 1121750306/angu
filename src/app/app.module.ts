import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { TextComponent } from './text/text.component';
import { CartComponent } from './cart/cart.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ProvinceComponent } from './province/province.component';
import { ObseverbalComponent } from './obseverbal/obseverbal.component';
import { HeroService} from './hero.service';
import { JsonpComponent } from './jsonp/jsonp.component'
import { AppRoutingModule } from './app-routing.module';
import { HeroeditComponent } from './heroedit/heroedit.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MiddleComponent } from './middle/middle.component';
import { FormsComponent } from './forms/forms.component';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    TextComponent,
    CartComponent,
    HeroDetailComponent,
    ProvinceComponent,
    ObseverbalComponent,
    JsonpComponent,
    HeroeditComponent,
    TopComponent,
    BottomComponent,
    MiddleComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
//  InMemoryWebApiModule.forRoot(InMemoryDataService),
    JsonpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
