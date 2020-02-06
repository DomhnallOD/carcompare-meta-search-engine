import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model:FeedbackViewModel = {
	  first_name:"",
	  last_name:"",
	  email:"",
	  feedback:""
  }


  constructor(private httpClient: HttpClient) { } //In Tutorial: "(private http: HttpClient)" 

  ngOnInit() {
  }
  
  sendFeedback(): void {
	  let url = "http://localhost:8081/membersinsert";
	  this.httpClient.post(url, this.model).subscribe(
		result => {
			alert("Amazing");//location.reload();
		},
		error => {
			alert(error.message);
		}
		
	  );
  }
  falsifyFeedback(): void {
	  let obj = {
  "dob": "1970-06-01",
  "last_name": "PUT update from frontend",
  "first_name": "Walsh",
  "address_eircode": "R54Y9F2",
  "address_line_1": "5b",
  "address_line_2": "Rosehill Estate",
  "address_town": "Galway",
  "address_county": "Galway",
  "email": "chocolateorange@gmail.com"
}
	  let url = "http://carcompare-api.us-e2.cloudhub.io/members/43";
	  this.httpClient.put(url, obj,
    {responseType: 'text'}).subscribe(
		result => {
			alert("Amazing" + result);//location.reload();
		},
		error => {
			alert(error.message + url);
		}
		
	  );
  }

}

export interface FeedbackViewModel{
	first_name:string;
	last_name:string;
	email:string;
	feedback:string;
}