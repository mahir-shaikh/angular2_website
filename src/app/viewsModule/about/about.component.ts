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
    private expanded = true;
    AboutData = [
            {
        "type": "heading",
        "value": "Apr 2014"
    },
    {
        "type": "content",
        "value": {
            "heading":"Surprising Headline Right Here",
            "subheading":" 3 hours ago",
            "body":["Lorem Ipsum and such."]
        }
    },
    {
        "type": "content",
        "value": {
            "heading":"Breaking into Spring!",
            "subheading":" 4/07/2014",
            "body":["Hope the weather gets a bit nicer...","Y'know, with more sunlight."]
        }
    },
    {
        "type": "heading",
        "value": "Mar 2014"
    },
    {
        "type": "content",
        "value": {
            "heading":"New Apple Device Release Date",
            "body":["In memory of Steve Jobs."]
        }
    },
    {
        "type": "content",
        "value": {
            "heading":"No icon here",
            "subheading":" 4/07/2014",
            "body":['Here you will find some beautiful photography for your viewing pleasure, courtesy of <a href="http://lorempixel.com/">lorempixel</a>',"<img src='http://lorempixel.com/600/300/nightlife/' alt='lorem pixel'>"]
        }
    }
    ];

    
    constructor(private router: Router) { }

    ngOnInit() {
        this.isClosing = false;
        this.isOpening = true;
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