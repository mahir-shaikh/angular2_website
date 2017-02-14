import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   private isClosing = false;
    private isOpening = true;
    private modalShow: boolean = true;
    private expanded = false;
    private activeIndex: number;
    private planningStepsText:string = "";
    private guidePage1Text:string = "";
    private guidePage2Text:string = "";
    private guidePage3Text:string = "";
    private guidePage4Text:string = "";
    private guidePage5Text:string = "";
    
    constructor(private router: Router) { }

    ngOnInit() {
        this.isClosing = false;
        this.isOpening = true;

        this.planningStepsText = "PlanningStepsPage1Text";

        this.guidePage1Text = "GuidePage1Text";
        this.guidePage2Text = "GuidePage2Text";
        this.guidePage3Text = "GuidePage3Text";
        this.guidePage4Text = "GuidePage4Text";
        this.guidePage5Text = "GuidePage5Text";
    }

    onClose() {
        this.isClosing = true;
        this.isOpening = false;
        this.modalShow = false;
        // let regex = new RegExp("(/)?" +RESOURCES_ROUTE + "(//)?");
        // let newUrl = this.router.url.replace(regex, '');
        // setTimeout(() => this.router.navigateByUrl(newUrl), 1000);
        setTimeout(() => this.router.navigateByUrl("/dashboard"), 1000);
    }
}