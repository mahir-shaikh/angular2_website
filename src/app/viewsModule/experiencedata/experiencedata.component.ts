import { Component, OnInit } from '@angular/core';
import { ExpDataService } from './expData.service';

@Component({
  selector: 'experience-data',
  templateUrl: './experiencedata.component.html',
  styleUrls: ['./experiencedata.component.css'],
  providers:[ExpDataService]
})
export class ExperiencedataComponent implements OnInit {
    private Loaded:boolean = false;
    private currentIndex: number = 0;
    private maxCount: number;
    ExperienceData = [];

    constructor(private expDataService : ExpDataService) { }

    ngOnInit() {
        this.Loaded = false;
        this.expDataService.getAboutData().subscribe(
             data => {
                 setTimeout(()=>{
                    this.ExperienceData = data;
                    this.maxCount = this.ExperienceData.length - 1;
                    this.Loaded = true;
                 },3000);
                 
        });
    }

    onNext(){
        this.currentIndex++;
        if(this.currentIndex == this.maxCount+1){
            this.currentIndex = 0;
        }
    }

    onPrev(){
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.maxCount;
        }
    }

}