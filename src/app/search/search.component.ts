import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
data: SafeHtml;

x="";
result="";

  constructor() { }

  ngOnInit() {
  }

  resultHandler(result: string){
	  this.result=result;
	  //alert("FROM SEARCH: \n" + result);
	var obj = JSON.parse(result);

	this.data="";
	for (var i = 0; i <= obj.length; i++) //The json object has length
	{
		
		var object = obj[i]; //You are in the current object
		if (object != undefined){
		//Get values of each thing
		var km = object.km;
		var transmission = object.transmission;
		var engine_size = object.engine_size;
		if(object.title.length > 25){
			var title = object.title.slice(0, 22) + "...";
		}
		else if(object.title.length <= 0){
			var title = "Tashty vehicle for sale";
		}
		else{
			var title = object.title.slice(0, 80) + "...";
		}
		var make = object.make.charAt(0).toUpperCase() + object.make.slice(1);
		var colour = object.colour;
		var county = object.county = object.county.charAt(0).toUpperCase() + object.county.slice(1);
		var year = object.year;
		var engine_type = object.engine_type.charAt(0).toUpperCase() + object.engine_type.slice(1);

		var doors = object.doors;
		var price = object.price;
		if(object.description.length > 85){
			var description = object.description.slice(0, 80) + "...";
		}
		else if(object.description.length <= 0){
			var description = "No custom description available.";
		}
		else{
			var description = object.description.slice(0, 80) + "...";
		}
		var owners = object.previous_owners;
		var listing_id = object.listing_id;
		var listing_href = object.listing_href;
		var model = object.model.charAt(0).toUpperCase() + object.model.slice(1);
		var image_url = object.image_url;
		var body = object.body;
		
		
		
		
		var listingHTML = `<div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="` + image_url + `" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">`+ title +`</h5>
					<p><b>`+make+" "+model+"\t\t€"+price+`</b></p>
                    <p class="card-text">` + description +`</p>
                    <a href="`+ listing_href +`" class="btn btn-primary">Info</a><b>`+county+`</b><b>`+" "+engine_size+engine_type+" "+year+`</b>
					
                </div>
            </div>
        </div>`
		
		this.data += listingHTML;
		}
		console.log(this.data);
		
	}
  }

}
