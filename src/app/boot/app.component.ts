import { Router } from '@angular/router';
import { Component, ViewContainerRef, OnInit, EventEmitter } from '@angular/core';
import '../../../assets/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    showSocialComponent(){
        this.router.navigateByUrl("/social")
    }
}
