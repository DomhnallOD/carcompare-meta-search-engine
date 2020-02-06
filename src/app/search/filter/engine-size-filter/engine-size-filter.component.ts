import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Options, Ng5SliderModule } from "ng5-slider";
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-engine-size-filter',
  templateUrl: './engine-size-filter.component.html',
  styleUrls: ['./engine-size-filter.component.css']
})
export class EngineSizeFilterComponent implements OnInit {
	@Output() minEngineSize: EventEmitter<number> =   new EventEmitter();
	@Output() maxEngineSize: EventEmitter<number> =   new EventEmitter();
	
  constructor() { }

  ngOnInit() {
  }

  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([1, 2])
  });
  
  options: Options = {
    floor: 0,
    ceil: 8,
    step: 1
  };

  updateValue(): void {
	this.minEngineSize.emit(this.sliderForm.value.sliderControl[0]);
	this.maxEngineSize.emit(this.sliderForm.value.sliderControl[1]);
  }
  
}
