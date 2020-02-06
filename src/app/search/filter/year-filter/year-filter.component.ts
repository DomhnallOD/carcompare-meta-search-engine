import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Options, Ng5SliderModule } from "ng5-slider";
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-year-filter',
  templateUrl: './year-filter.component.html',
  styleUrls: ['./year-filter.component.css']
})
export class YearFilterComponent implements OnInit {
	@Output() minYear: EventEmitter<number> =   new EventEmitter();
	@Output() maxYear: EventEmitter<number> =   new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([2010, 2019])
  });
  
  options: Options = {
    floor: 1980,
    ceil: 2019,
    step: 1
  };

  updateValue(): void {
	this.minYear.emit(this.sliderForm.value.sliderControl[0]);
	this.maxYear.emit(this.sliderForm.value.sliderControl[1]);
  }
  
}
