import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-filter',
  templateUrl: './model-filter.component.html',
  styleUrls: ['./model-filter.component.css']
})
export class ModelFilterComponent implements OnInit {
	@Output() models: EventEmitter<any> =   new EventEmitter();
	
	myForm:FormGroup;
	//Declare variables
		disabled = false;
		ShowFilter = false;
		limitSelection = false;
		makes: any = [];
		selectedItems: any = [];
		dropdownSettings: any = {};

  constructor(private fb: FormBuilder) {
	//Makes list
		this.makes=[{item_id:1,item_text:"Abarth"},{item_id:2,item_text:"AC"},{item_id:3,item_text:"Alfa Romeo"},{item_id:4,item_text:"Asia"},{item_id:5,item_text:"Aston Martin"},{item_id:6,item_text:"Audi"},{item_id:7,item_text:"Austin"},{item_id:8,item_text:"Bentley"},{item_id:9,item_text:"BMW"},{item_id:10,item_text:"Buick"},{item_id:11,item_text:"Chevrolet"},{item_id:12,item_text:"Chrysler"},{item_id:13,item_text:"Citroen"},{item_id:14,item_text:"Dacia"},{item_id:15,item_text:"Daewoo"},{item_id:16,item_text:"Daihatsu"},{item_id:17,item_text:"Daimler"},{item_id:18,item_text:"Dodge"},{item_id:19,item_text:"Ferrari"},{item_id:20,item_text:"Fiat"},{item_id:21,item_text:"Ford"},{item_id:22,item_text:"Holden"},{item_id:23,item_text:"Honda"},{item_id:24,item_text:"Hummer"},{item_id:25,item_text:"Hyundai"},{item_id:26,item_text:"Infiniti"},{item_id:27,item_text:"Isuzu"},{item_id:28,item_text:"Jaguar"},{item_id:29,item_text:"Jeep"},{item_id:30,item_text:"Kia"},{item_id:31,item_text:"Land Rover"},{item_id:32,item_text:"Lexus"},{item_id:33,item_text:"Lincoln"},{item_id:34,item_text:"Lotus"},{item_id:35,item_text:"Mack"},{item_id:36,item_text:"Maserati"},{item_id:37,item_text:"Mazda"},{item_id:38,item_text:"Mercedes-Benz"},{item_id:39,item_text:"MG"},{item_id:40,item_text:"Microcar"},{item_id:41,item_text:"Mini"},{item_id:42,item_text:"Mitsubishi"},{item_id:43,item_text:"Nissan"},{item_id:44,item_text:"Opel"},{item_id:45,item_text:"Perodua"},{item_id:46,item_text:"Peugeot"},{item_id:47,item_text:"Porsche"},{item_id:48,item_text:"Proton"},{item_id:49,item_text:"Renault"},{item_id:50,item_text:"Rolls Royce"},{item_id:51,item_text:"Rover"},{item_id:52,item_text:"Saab"},{item_id:53,item_text:"Seat"},{item_id:54,item_text:"Skoda"},{item_id:55,item_text:"Smart"},{item_id:56,item_text:"SsanYong"},{item_id:57,item_text:"Stevens"},{item_id:58,item_text:"Subaru"},{item_id:59,item_text:"Suzuki"},{item_id:60,item_text:"Tesla"},{item_id:61,item_text:"Toyota"},{item_id:62,item_text:"Triumph"},{item_id:63,item_text:"TVR"},{item_id:64,item_text:"Vauxhall"},{item_id:65,item_text:"Volkswagen"},{item_id:66,item_text:"Volvo"}];
		  
		this.selectedItems = [];
		  
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'item_id',
			textField: 'item_text',
			selectAllText: 'Select All',
			unSelectAllText: 'UnSelect All',
			itemsShowLimit: 15,
			allowSearchFilter: this.ShowFilter
		};
	
		this.myForm = this.fb.group({
			make: [this.selectedItems]
		}) ;
  }

  updateValue(): void {
	this.models.emit(this.selectedItems);
  }
  
  onItemSelect(item: any){
	  this.selectedItems.push(item);
	  console.log('onitemSelect', item);
  }
  
  onItemDeSelect(item: any){
	  this.selectedItems.pop(item);
	  alert("pop")
	  
  }
  
  onSelectAll(items: any){
	  this.selectedItems.push(items);
	  alert("put all")
	}
	
	onDeSelectAll(items: any){
	  this.selectedItems.pop(items);
	  alert("pop all")
	}

  ngOnInit() {
  }

}