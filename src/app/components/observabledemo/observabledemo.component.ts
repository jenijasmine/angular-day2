import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {

  data;
  numclicks;
  constructor( private myservice: ObservableService) { }

  ngOnInit() {
    this.data = null;
    this.numclicks =0;
    this.myservice.getData().subscribe(
      incomingData => {
      this.data = incomingData;
      console.log(incomingData);
      }
    );
  }
  btnClicked() {
    ++this.numclicks;
  }

}
