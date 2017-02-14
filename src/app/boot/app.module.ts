import { ViewModule } from './../viewsModule/views.module';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { SplashComponent } from '../splash/splash.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
// import { PlanningToolDash } from '../planningtool/planning-tool-dashboard';

import { ComponentLoaderFactory } from 'ng2-bootstrap/component-loader';
import { TabsModule, ButtonsModule, DropdownModule, ModalModule, CarouselModule, TooltipModule, AccordionModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        TabsModule.forRoot(), 
        ButtonsModule.forRoot(), 
        DropdownModule.forRoot(), 
        ModalModule.forRoot(), 
        CarouselModule.forRoot(), 
        TooltipModule.forRoot(), 
        AccordionModule.forRoot(),
        ViewModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [ ComponentLoaderFactory],
    bootstrap: [AppComponent]
})
export class AppModule { }
