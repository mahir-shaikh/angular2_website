import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutDataService {

constructor(private http : Http) { }

getAboutData() {
    return this.http.get('./assets/data/About.json').map(
        result => {
            let data = result.json();
            return data;
        });
}

}