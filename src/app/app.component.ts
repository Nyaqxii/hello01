import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your Fristname';
  score = '100';
  colors = ['Blue', 'Green' ,'Red']; //Array
  show = true;
  firstname = '';
  lastname = '';
  name = '';

  inputYourName(event: any): void {
    this.firstname=event.target.value;
  }
  inputLastName(input: string): void {
    this.lastname = input;
  }

  saveResult(): void {
    this.name= this.firstname + '   ' + this.lastname;
  }
}
