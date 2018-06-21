import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgModel } from '@angular/forms';
import { CalendarModule, DropdownModule, DataTableModule, InputTextModule, AccordionModule } from 'primeng/primeng';
import { FlightSearchService } from './app.service';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchflightnumber: boolean = false;
  searchorigindes: boolean = true;
  today = new Date();
  flightSearchForm: FormGroup;
  searchComplete:boolean=true;
  searchResults:any= [];

  constructor(private fb: FormBuilder, private service: FlightSearchService) {
    this.searchForm();
  }


  searchForm() {
    this.flightSearchForm = this.fb.group({
      flightNumber: [null],
      destination: [null],//, [Validators.required, Validators.minLength(3)]
      origin: [null],
      fromdate: [null],
      todate: [null]
    }, {
        validator: (group) => {
          if (this.searchflightnumber) {
            return Validators.required((group.controls.flightNumber))
          }
          if (this.searchorigindes) {
            return Validators.required((group.controls.destination))
          }
          return null;
        }
      });
  }
  searchflight() {
    let form = this.flightSearchForm.value;
    var params = "ori="+form.origin+"&des="+form.destination+"&from="+form.fromdate+"&to="+form.todate;    
     if (this.searchflightnumber) {
       params = "flightNumber="+form.flightNumber+"&from="+form.fromdate+"&to="+form.todate; 
     }
    this.service.search(params).subscribe(
      data => {
      //  debugger;
        this.searchComplete = true;
        this.searchResults = data;
      },
      error => {
        alert('Service failed; Please check stubs.')
      }
    );
  }
  switchsearch() {
    this.searchflightnumber = !this.searchflightnumber;
    this.searchorigindes = !this.searchorigindes;
    this.flightSearchForm.patchValue({
      flightNumber: '', destination: '', origin: ''
    })
    /* this.flightSearchForm.get('flightNumber').clearValidators();
     this.flightSearchForm.get('origin').clearValidators();
     this.flightSearchForm.get('destination').clearValidators();
 
     if (this.searchflightnumber) {
       this.flightSearchForm.get('flightNumber').setValidators([Validators.required, Validators.minLength(4)]);
       this.flightSearchForm.get('flightNumber').updateValueAndValidity();
     }else {
       this.flightSearchForm.get('origin').setValidators([Validators.required, Validators.minLength(3)]);
       this.flightSearchForm.get('origin').updateValueAndValidity();
       this.flightSearchForm.get('destination').setValidators([Validators.required, Validators.minLength(3)]);
        this.flightSearchForm.get('destination').updateValueAndValidity();
     }*/
  }
}
