import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SliderDataService {

constructor(private http : Http) { }

getSliderData() {
    return this.http.get('./assets/data/Designs.json').map(
        result => {
            let data = result.json();
            return data;
        });
}

}