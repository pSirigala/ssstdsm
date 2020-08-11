import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface slide{
  title: string,
  subTitle: string,
  src: string,
  slideType: string,
  order: number,
  isActive: boolean,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  private slidesCollection: AngularFirestoreCollection<slide>;
  private slides: Observable<slide[]>;

  constructor(db:AngularFirestore) { 
    this.slidesCollection = db.collection<slide>('slides');

    this.slides = this.slidesCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getSlidesByType(type){    
    return this.slides.pipe(map(s => s.filter(x=>x.slideType === type && x.isActive).sort(x=>x.order)));
  }
}
