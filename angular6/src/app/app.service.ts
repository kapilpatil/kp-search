import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';




@Injectable()
export class FlightSearchService {

    constructor(
        private http: HttpClient
    ) { }

    search(params): Observable<any> {
        var url = "http://localhost:8882/searchFlights?"+params;
        return this.http.get(url)//.pipe(map((response: any) => response.json()));
            //.pipe(map((res: Response) => { return res; }))
            /*.catch((err: Response | any) => {
                return Observable.throw(err.statusText);
            });*/
    }
}