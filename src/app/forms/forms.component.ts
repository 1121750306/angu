import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
	
	user:FormGroup;
  constructor() { }

  ngOnInit() {
  	this.user = new FormGroup({
  		name:new FormControl('',[Validators.required,Validators.minLength(2)]),
  		account: new FormGroup({
  			email: new FormControl('',Validators.required),
  			confirm: new FormControl('',Validators.required)
  		})
  	})
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
  	console.log(value)
  }
  
  
}
export class User{
  	name:string;
  	account:{
  		email:string;
  		confirm:string;
  	}
  }
