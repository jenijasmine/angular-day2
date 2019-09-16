import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  datastream: Observable<any>;
  constructor() { 
    this.datastream = new Observable(
      observer => {
    setTimeout(() => {
   observer.next(10);
    }, 5000);

    setTimeout(() => {
      observer.next(20);
       }, 10000);

       setTimeout(() => {
        observer.next(55);
         }, 15000);

         setTimeout(() => {
          observer.next({
            name:'ABCD',
            score:35
          });
           }, 20000);
  }
    );
  }
  

  getData() {
    return this.datastream;
  }
}
