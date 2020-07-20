import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  firstname = '';
  lastname = '';
  name = '';
  colors = []; //Array
  show = true;
  count = 0 ;
  total = 30 ;
  inputYourName(event: any): void {
    this.firstname=event.target.value;
  }
  inputLastName(input: string): void {
    this.lastname = input;
  }

  saveResult(): void {
    this.name= this.firstname + '   ' + this.lastname;
    this.colors.push(this.name);

  }
  counter():void{
    this.count += 1 ;
  }

  totaler():void{
    this.total += 0 ;
  }
  toggle(){

  }
  ngOnInit(): void {
  }

}
