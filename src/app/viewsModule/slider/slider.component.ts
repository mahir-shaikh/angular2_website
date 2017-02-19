import { SliderDataService } from './sliderData.service';
import {Input, Component,   OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers : [SliderDataService]
})
export class SliderComponent implements OnInit {
  @Input() activeNumber : number;
  slideIndex : number = 1;
  JsonArrayData = {
    "logo" : [        
            {
                "title": "Rio",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["assets/images/logo_A1.png"]
            },
            {
                "title": "Health Khazana",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["assets/images/logo_B1.png"]
            },
            {
                "title": "Stts",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["assets/images/logo_C1.png"]
            },
            {
                "title": "Trendz",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["assets/images/logo_D1.png"]
            }         
    ],
    "poster":[
        
            {
                "title": "Innovision",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["assets/images/poster_A1.jpg","assets/images/poster_A2.jpg","assets/images/poster_A3.jpg"]
            },
             {
                "title": "Computer Assembly Workshop",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["assets/images/poster_B1.jpg", "assets/images/poster_B2.jpg", "assets/images/poster_B3.jpg","assets/images/poster_B4.jpg"]
            },
            {
                "title": "Abit IV",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["assets/images/poster_C1.jpg"]
            },
            {
                "title": "Abit Orientation",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["assets/images/poster_D1.jpg"]
            }
    ],
    "unlabled" :[
             {
                "title": "Zodiac",
                "description": "The number of active participants you had last year in this customer segment",
                "name" : ["unlabled_A1", "unlabled_A2", "unlabled_A3", "unlabled_A4"]
            }
    ]
};
    currentTitle : string = "";
    currentImage : string = "";
    currentDescription : string = "";
    currentScenario : string = "";
    currentIndex : number = 0;
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
}

getScenario() : string {
  let scenario : string ="";
  switch(this.activeNumber){
    case 0 : 
      scenario = "logo";
      break;
    case 1 :
      scenario = "poster";
      break;
    case 2 :
      scenario = "unlabled";
      break;
    default:
      scenario = "logo";
  }
  return scenario;
}

}