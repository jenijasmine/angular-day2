import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  favdish;
  data4Child;
  childFavCountry;
  constructor() { }

  ngOnInit() {
    this.favdish='';
    this.data4Child = '';
    this.childFavCountry='';
  }

  sendData() {
    this.data4Child = this.favdish;
  }

  handleCountryEvent(event){
    //console.log(event);
    this.childFavCountry=event;
  }

}
