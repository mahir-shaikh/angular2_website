import { Component, OnInit } from '@angular/core';
import { AboutDataService } from './aboutData.service';

@Component({
  selector: 'app-aboutdata',
  templateUrl: './aboutdata.component.html',
  styleUrls: ['./aboutdata.component.css'],
  providers:[AboutDataService]
})
export class AboutdataComponent implements OnInit {
  private Loaded:boolean = false;
  AboutData = [];

  constructor(private aboutDataService : AboutDataService) { }

  ngOnInit() {

    this.aboutDataService.getAboutData().subscribe(
      data => {
          setTimeout(()=>{
            this.AboutData = data;
            this.Loaded = true;
          },3000);
    });
  }

}