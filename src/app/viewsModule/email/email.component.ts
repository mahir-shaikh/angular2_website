import { EmailService } from './email.service';
import {OnDestroy, Component,  OnInit} from '@angular/core';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers : [ EmailService]
})
export class EmailComponent implements OnInit,OnDestroy {
  private result : string = "";
  constructor(private emailService : EmailService) { }

  ngOnInit() {
  }

  public message = {name: '', email: '', message: ''};
 
    onSubmit() {
      this.emailService.postEmail(this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    }
 
    handleResponse(response){
       console.log(`msg is: {response.status}`);
 
      if(response.status =='success'){
        this.message = {name: '', email: '', message: ''};
        this.result = 'Successfully Sent!!!';
      }
 
      if(response.status =='error'){
        this.result = 'Some Error Occurred. Please try again!!!';
      }
    }

    ngOnDestroy(){
      this.result = "";
    }

}