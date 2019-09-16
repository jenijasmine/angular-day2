import { Injectable } from '@angular/core';
import Actor from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActordataService {


 actordata: Actor[];
  constructor() {
 this.actordata = [
  { name: 'kamal', city: 'chennai', rating: 9.8 },
  { name: 'Rajini', city: 'mumbai', rating: 9.9 },
  { name: 'vijay', city: 'bangalore', rating: 9.1 },
  { name: 'surya', city: 'pune', rating: 8.7 },
  { name: 'vikram', city: 'chennai', rating: 8.2 }
 ];

   }

   getActor(){
     return this.actordata;
   }

   addActor(actor: Actor) {
     this.actordata.push(actor);
   }

   deleteActor(index: number) {
     this.actordata.splice(index, 1);
   }

   updateActor(index: number, newActor: Actor) {
     this.actordata.splice(index,1,newActor);
   }
}
