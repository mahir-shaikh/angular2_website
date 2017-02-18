import { SliderDataService } from './sliderData.service';
import {Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers : [SliderDataService]
})
export class SliderComponent implements OnInit {
  slideIndex : number = 1;
  JsonArrayData = {
    "logo" : [        
            {
                "title": "Rio",
                "description": "The number of active participants you had last year in this customer segment",
                "height" : "360",
                "width" : "360",
                "name" : ["logo_A1"]
            },
            {
                "title": "Health Khazana",
                "description": "The number of active participants you had last year in this customer segment",
                "height" : "360",
                "width" : "360",
                "name" : ["logo_B1"]
            },
            {
                "title": "Trendz",
                "description": "The number of active participants you had last year in this customer segment",
                "height" : "360",
                "width" : "360",
                "name" : ["logo_C1"]
            }        
  ],
    "poster":[
        
            {
                "title": "Web Developement",
                "description": "The number of active participants you had last year in this customer segment",
                "height" : ["360", "500"],
                "width" : ["360", "500"],
                "name" : ["poster_A1", "poster_A2"]
            },
             {
                "title": "Abit",
                "description": "The number of active participants you had last year in this customer segment",
                "height" : ["360", "500"],
                "width" : ["360", "500"],
                "name" : ["poster_B1", "poster_B2", "poster_B3"]
            },
            {
                "title": "Zodiac",
                "description": "The number of active participants you had last year in this customer segment",
                "height" : ["360"],
                "width" : ["360"],
                "name" : ["poster_C1"]
            }
        ],
    "unlabled" :[
             {
                "title": "Zodiac",
                "description": "The number of active participants you had last year in this customer segment",
                "height" : ["360", "500","360", "500"],
                "width" : ["360", "500","360", "500"],
                "name" : ["unlabled_A1", "unlabled_A2", "unlabled_A3", "unlabled_A4"]
            }
        ]
    };
    currentTitle : string = "";
    currentImage : string = "";
    currentDescription : string = "";
    currentScenario : string = "logo";
    currentIndex : number = 0;
    ImagePath : string = "";
    isImageArray : boolean = false;
    ImageArray = [];
    ImageIndex : number = 0;

  constructor(private sliderDataService : SliderDataService) {
   }

  ngOnInit() {
    this.showSlideData();
  }

 NextSlide() {
  if(this.currentIndex == this.JsonArrayData[this.currentScenario].length -1)
  {
    this.currentIndex = 0;
  }
  else
  {
    this.currentIndex++;
  }
  this.showSlideData();
}

PreviousSlide(){
  if(this.currentIndex > 0)
  {
    this.currentIndex--;
  }
  else
  {
    this.currentIndex = this.JsonArrayData[this.currentScenario].length -1;
  }
  this.showSlideData();
}

NextImage() {
  if(this.ImageIndex == this.JsonArrayData[this.currentScenario][this.currentIndex].name.length -1)
  {
    this.ImageIndex = 0;
  }
  else
  {
    this.ImageIndex++;
  }
}

PreviousImage(){
  if(this.ImageIndex > 0)
  {
    this.ImageIndex--;
  }
  else
  {
    this.ImageIndex = this.JsonArrayData[this.currentScenario][this.currentIndex].name.length -1;
  }
}

showSlideData(){
   this.currentScenario = this.getScenario();
   let currentObject = this.JsonArrayData[this.currentScenario][this.currentIndex];
   this.currentTitle = currentObject.title;
   this.currentDescription = currentObject.description;
   this.currentImage = currentObject.name[0];
   this.ImageArray = currentObject.name;
   if(currentObject.name.length > 1)
   {
     this.isImageArray = true;
   }else{
     this.isImageArray = false;
   }
   this.ImagePath = "./../../../../assets/images/" + this.currentImage + ".png";
}

getScenario() : string {
  let scenario : string ="";
  let activeNumber = 2;
  switch(activeNumber){
    case 1 : 
      scenario = "logo";
      break;
    case 2 :
      scenario = "poster";
      break;
    case 3 :
      scenario = "unlabled";
      break;
    default:
      scenario = "logo";
  }
  return scenario;
}

}