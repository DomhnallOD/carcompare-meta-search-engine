import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	
	model:RegistrationViewModel = {
		first_name:"",
		last_name:"",
		dob:Date(),
		email:"",
		address_eircode:"",
		address_line_1:"",
		address_line_2:"",
		address_town:"",
		address_county:"",
		user_password: ""
	};
	

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  
  
  
  register(): void {
	  let url = "http://carcompare-api.us-e2.cloudhub.io/members";
	  this.httpClient.post(url, this.model, {responseType: 'text'}).subscribe(
		result => {
			alert("Amazing" + Response);
			location.reload();
		},
		error => {
			alert(error.message);
		}
	  );
  }

}

export interface RegistrationViewModel{
	first_name:string; 
	last_name:string;
	dob:string;
	email:string;
	address_eircode:string;
	address_line_1:string;
	address_line_2:string;
	address_town:string;
	address_county:string;
	user_password:string;
	
}