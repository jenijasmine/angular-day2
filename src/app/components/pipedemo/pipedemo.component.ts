import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  text: string;
  today: Date;
  price:number;
  student;
  constructor() { }

  
  ngOnInit() {
    this.text='';
    this.today = new Date();
    this.price= 25.7;
    this.student ={
      name:'jenifa',
      cgpa:'8.8'
    }
  }

}
