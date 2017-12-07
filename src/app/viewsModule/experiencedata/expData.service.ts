import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpDataService {

constructor(private http : Http) { }

getAboutData() {
    return this.http.get('./assets/data/Experience.json').map(
        result => {
            let data = result.json();
            return data;
        });
}

}