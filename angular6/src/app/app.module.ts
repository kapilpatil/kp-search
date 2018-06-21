import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule, DropdownModule, DataTableModule, InputTextModule, DialogModule,AccordionModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { FlightSearchService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule, DropdownModule, DataTableModule, TableModule,InputTextModule, DialogModule,AccordionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlightSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
