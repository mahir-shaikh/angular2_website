import { SliderDataService } from './sliderData.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers : [SliderDataService]
})
export class SliderComponent implements OnInit {

  constructor(private sliderDataService : SliderDataService) { }

  ngOnInit() {
  }

}