import { Component, OnInit } from '@angular/core';
import { ActordataService } from '../../services/actordata.service';
import Actor from '../../models/actor.model';

@Component({
  selector: 'app-anglist',
  templateUrl: './anglist.component.html',
  styleUrls: ['./anglist.component.css']
})
export class AnglistComponent implements OnInit {

  actorlist: Actor[];
  newActor: Actor;
  selectedIndex: number;
  tempActor: Actor;
  tempActorList: Actor[];

  constructor(private actordataService : ActordataService) { }

  ngOnInit() {
    // this.actorlist = [
    //   { name: 'kamal', city: 'chennai', rating: 9.8 },
    //   { name: 'Rajini', city: 'mumbai', rating: 9.9 },
    //   { name: 'vijay', city: 'bangalore', rating: 9.1 },
    //   { name: 'surya', city: 'pune', rating: 8.7 },
    //   { name: 'vikram', city: 'chennai', rating: 8.2 }
    // ];
    this.actorlist = this.actordataService.getActor();
    this.newActor = {name:null,city:null,rating:null};
    this.selectedIndex = -1;
    this.tempActor = Object.assign({},this.newActor);
    this.tempActorList = JSON.parse(JSON.stringify(this.actorlist));//(or) this.tempActorList = this.actorlist.slice();
  }

  deleteActor(index) {
    //this.actorlist.splice(index, 1);
    this.actordataService.deleteActor(index);
  }

  addActor() {
    this.actordataService.addActor(this.newActor);
    //this.actorlist.push(this.newActor);
    this.newActor = {
      name:null,
      city:null,
      rating:null
    };
  }

  editActor(index) {
    this.selectedIndex = index;
    //this.tempActor = this.actorlist[index];
    //approach-1
    //this.tempActor ={
    //name: this.actorlist[index].name,
    //city: this.actorlist[index].city,
    //rating: this.actorlist[index].rating
    //}
    //approach-2
    this.tempActor = JSON.parse(JSON.stringify(this.actorlist[index]));
    //approach-3
    //this.tempActor = Object.assign({}, this.actorlist[index]);
  }

  saveActor(index) {
    this.selectedIndex = -1;
  }

  cancelActor(index) {
    //this.actorlist[index] = this.tempActor;
    this.actordataService.updateActor(index,this.tempActor);
    this.selectedIndex = -1;
  }

  handleKey(event, index) {
    if (event.key === 'Escape') {
      this.cancelActor(index);
    }
  }

  resetList(){
    this.actorlist = this.tempActorList.slice();
  }

  // sortList(property, direction) {
  //   this.actorlist.sort(
  //     (first, second) => {
  //       if(typeof first[property] === 'string') {
  //        //string comparison
  //        if(direction === 'ascending') {
  //         if(first[property] > second[property]) { return 1; }
  //         if(first[property] < second[property]) { return -1; }
  //         return 0;
  //        } else { 
  //         if(first[property] > second[property]) { return -1; }
  //         if(first[property] < second[property]) { return 1; }
  //         return 0;
  //        }
  //       }else {
  //         //numeric comparison
  //         if(direction === 'ascending') {
  //           return first[property]-second[property];
  //         }
  //         else {
  //           return second[property]-first[property];
  //         }
  //       }
  //     }
  //   );
  // }

  sortList(property: string, direction:string) {
    this.actorlist.sort(
      (first,second) => {
        let result =0;
        if(first[property] > second[property]) { result =1; }
        if(first[property] < second[property]) { result =-1; }
        return (direction === 'ascending') ? result : -result;
      }
    );
  }

}
