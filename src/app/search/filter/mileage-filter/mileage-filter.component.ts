import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Options, Ng5SliderModule } from "ng5-slider";
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mileage-filter',
  templateUrl: './mileage-filter.component.html',
  styleUrls: ['./mileage-filter.component.css']
})
export class MileageFilterComponent implements OnInit {
	@Output() minKm: EventEmitter<number> =   new EventEmitter();
	@Output() maxKm: EventEmitter<number> =   new EventEmitter();
	
  constructor() { }

  ngOnInit() {
  }

  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([10000, 50000])
  });
  
  options: Options = {
    floor: 0,
    ceil: 500000,
    step: 2000
  };

  updateValue(): void {
	this.minKm.emit(this.sliderForm.value.sliderControl[0]);
	this.maxKm.emit(this.sliderForm.value.sliderControl[1]);
  }
  
}
