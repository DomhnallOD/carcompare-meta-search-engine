import { Component, OnInit, EventEmitter, Input, Output } from
 '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	@Output() searchResponses: EventEmitter<any> =   new EventEmitter();
	
	model:FilterModel = {
		minPrice:10000,
		maxPrice:39000,
		
		minYear:2010,
		maxYear:2019,
		
		minKm:10000,
		maxKm:50000,
		
		minEngineSize:1.5,
		maxEngineSize:1.9,
		makeNames:"Honda"
	};

	//Declare default search filter values
	minPrice = 10000;
	maxPrice  = 39000;
	
	minYear = 2010;
	maxYear = 2019;
	
	minKm = 10000;
	maxKm = 50000;
	
	minEngineSize = 1.5;
	maxEngineSize = 1.9;
	makeObjects = [{item_id: 1, item_text: "Abarth"}, {item_id: 2, item_text: "AC"}];
	makeNames = [];
	
	
	
	responseString="";
	result1="";
	result="";

	

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  minPriceHandler(minPrice: number) {
    this.minPrice = minPrice;
  }
  
  maxPriceHandler(maxPrice: number) {
    this.maxPrice = maxPrice;
  }
  
  minYearHandler(minYear: number) {
    this.minYear = minYear;
  }
  
  maxYearHandler(maxYear: number) {
    this.maxYear = maxYear;
  }
  
  minKmHandler(minKm: number) {
    this.minKm = minKm;
  }
  
  maxKmHandler(maxKm: number) {
    this.maxKm = maxKm;
  }
  
  minEngineSizeHandler(minEngineSize: number) {
    this.minEngineSize = minEngineSize;
  }
  
  maxEngineSizeHandler(maxEngineSize: number) {
    this.maxEngineSize = maxEngineSize;
  }
  
  modelsHandler(makeObjects: any) { //Recieves an array of objects
    this.makeObjects = makeObjects;
  }

  sortModels(){
	this.makeNames = [];
		
	for(var i = 0; i < this.makeObjects.length; i++) 
	{
	  //Add item_text to list
	  this.makeNames.push(this.makeObjects[i].item_text);
	}
  
  }
   
  search2222() {
	//Extract the "item_text" part of each item im the "makesObjects" list
		this.makeObjects.forEach(function(entry) {
			console.log("OK"  + entry.item_text);  //"entry.item_text" refers to the name of the car make being requested
		});

		this.sortModels();
		
		alert(	"minPrice: " + this.minPrice + "\n" + 
				"maxPrice: " + this.maxPrice + "\n" + 
				
				"minYear: " + this.minYear + "\n" + 
				"maxYear: " + this.maxYear + "\n" +  
				
				"minKm: " + this.minKm + "\n" + 
				"maxKm: " + this.maxKm + "\n" +  
				
				"minEngineSize: " + this.minEngineSize + "\n" + 
				"maxEngineSize: " + this.maxEngineSize + "\n" + 

				"makeNames: " + this.makeNames);
  }
  
  search(): void {
	  let url = "http://vehicles-compiled-database.us-e2.cloudhub.io/vehicle-postings?minPrice="+ this.minPrice +"&maxPrice="+ this.maxPrice +"&minYear="+ this.minYear +"&maxYear="+ this.maxYear +"&minOdometerReading="+ this.minKm +"&maxOdometerReading="+ this.maxKm +"&minEngineSize="+ this.minEngineSize +"&maxEngineSize="+ this.maxEngineSize +"&makeNames=seat";
	  this.httpClient.get(url, {responseType: 'text'}).subscribe(
		result => {
			//this.result = JSON.stringify(Response);
			//this.result = result.json());

			//this.responseString = JSON.stringify(Response);
			this.searchResponses.emit(result);
			console.log(url);
			//alert(result);
		},
		error => {
			console.log(url);
			alert(error.message + "\n" + this.model.minKm);
		}
	  );  
	   
  }
  
  
}

export interface FilterModel{
	minPrice:number;
	maxPrice:number; 

	minYear:number;
	maxYear:number; 

	minKm:number;
	maxKm:number;  

	minEngineSize:number; 
	maxEngineSize:number;

	makeNames:string;
}

