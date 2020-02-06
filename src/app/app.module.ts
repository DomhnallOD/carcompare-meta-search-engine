import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FilterComponent } from './search/filter/filter.component';
import { ModelFilterComponent } from './search/filter/model-filter/model-filter.component';
import { PriceFilterComponent } from './search/filter/price-filter/price-filter.component';
import { Ng5SliderModule } from 'ng5-slider';
import { YearFilterComponent } from './search/filter/year-filter/year-filter.component';
import { MileageFilterComponent } from './search/filter/mileage-filter/mileage-filter.component';
import { EngineSizeFilterComponent } from './search/filter/engine-size-filter/engine-size-filter.component';

const appRoutes: Routes = [
  { path: 'search', 
  component: SearchComponent 
  },
  { path: '', 
  component: SearchComponent,
  pathMatch: 'full'
  },
  { path: 'feedback', 
  component: FeedbackComponent 
  },
  { path: 'registration', 
  component: RegistrationComponent 
  },
  { path: '**', 
  component: NotFoundComponent 
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    NotesComponent,
	SearchComponent,
    NotFoundComponent,
    RegistrationComponent,
    SearchComponent,
    FilterComponent,
    ModelFilterComponent,
    PriceFilterComponent,
    YearFilterComponent,
    MileageFilterComponent,
    EngineSizeFilterComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule,
	FormsModule,
	Ng5SliderModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes),
	NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
