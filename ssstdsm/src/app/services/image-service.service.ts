import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private baseUrl = 'images/';
  private baseSlidesUrl = 'images/slides/';  
  homeSlides: Observable<any[]>
  templeConstructionSlides: Observable<any[]>;
  
  constructor(private storage: AngularFireStorage) { 
    storage.ref(this.baseSlidesUrl + "home/").getDownloadURL().subscribe(downloadUrl =>{
      this.homeSlides = downloadUrl
    });
    storage.ref(this.baseSlidesUrl + "templeConstruction/").getDownloadURL().subscribe(downloadUrl =>{
      this.homeSlides = downloadUrl
    });
  } 

}
