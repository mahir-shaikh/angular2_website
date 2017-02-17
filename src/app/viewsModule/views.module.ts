import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
//To maintain proper moduler structure declare and export all component in this module and import this module in root module

import { NgModule } from '@angular/core';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { DesigningComponent } from './designing/designing.component';
import { ResumeComponent } from './resume/resume.component';
import { DevelopementComponent } from './developement/developement.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
    imports: [RouterModule, CommonModule],
    exports: [
        SplashComponent,
        DashboardComponent,
         AboutComponent,
        PageNotFoundComponent,
        ExperienceComponent,
        ContactComponent,
        DesigningComponent,
        ResumeComponent,
        DevelopementComponent              
    ],

    declarations: [
        SplashComponent,
        DashboardComponent,
        AboutComponent,
        PageNotFoundComponent,
        ExperienceComponent,
    ContactComponent,
    DesigningComponent,
    ResumeComponent,
    DevelopementComponent,
    SliderComponent,
],
    providers: [],
})
export class ViewModule { }