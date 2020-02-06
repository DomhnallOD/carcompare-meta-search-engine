import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Options, Ng5SliderModule } from "ng5-slider";
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: "app-price-filter",
  templateUrl: "./price-filter.component.html",
  styleUrls: ["./price-filter.component.css"]
})

export class PriceFilterComponent implements OnInit {
	@Output() minPrice: EventEmitter<number> =   new EventEmitter();
	@Output() maxPrice: EventEmitter<number> =   new EventEmitter();
  
  constructor() {}

  ngOnInit() {}

  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([10000, 15000])
  });

  options: Options = {
    floor: 500,
    ceil: 70000,
    step: 500
  };

  updateValue(): void {
	this.minPrice.emit(this.sliderForm.value.sliderControl[0]);
	this.maxPrice.emit(this.sliderForm.value.sliderControl[1]);

  }
}