import { AboutDataService } from './aboutData.service';
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[AboutDataService]
})
export class AboutComponent implements OnInit {
   private isClosing = false;
    private isOpening = true;
    private modalShow: boolean = true;
    private expanded = true;
    private Loaded:boolean = false;
    AboutData = [];

    
    constructor(private router: Router, private aboutDataService : AboutDataService) { }

    ngOnInit() {
        this.isClosing = false;
        this.isOpening = true;
        this.Loaded = false;

        this.aboutDataService.getAboutData().subscribe(
             data => {
                 setTimeout(()=>{
                    this.AboutData = data;
                    this.Loaded = true;
                 },3000);
                 
        });
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