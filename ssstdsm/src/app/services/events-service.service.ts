import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { database } from 'firebase';
import { Timestamp, Observable } from 'rxjs';
import { ActivationStart } from '@angular/router';
import { map } from 'rxjs/operators';

export interface event{
  name: string,
  description:string,
  address:string,  
  active: boolean
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsCollections: AngularFirestoreCollection<event>;
  private events: Observable<event[]>;

  constructor(db:AngularFirestore) { 
    this.eventsCollections = db.collection<event>('events');

    this.events = this.eventsCollections.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
        });
      })
    );

  }

  getEvents(){
    return this.events;
  }
}
