import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   private isClosing = false;
    private isOpening = true;
    private modalShow: boolean = true;
    private expanded = false;
    private activeIndex: number;


  constructor(private router : Router) { }

  ngOnInit() {
    this.isClosing = false;
        this.isOpening = true;
  }


  onClose(){
     this.isClosing = true;
        this.isOpening = false;
        this.modalShow = false;
        // let regex = new RegExp("(/)?" +RESOURCES_ROUTE + "(//)?");
        // let newUrl = this.router.url.replace(regex, '');
        // setTimeout(() => this.router.navigateByUrl(newUrl), 1000);
        setTimeout(() => this.router.navigateByUrl("/dashboard"), 1000);
  }
}