import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

  getPatientByName(first_name: string, last_name: string){
    return this.firestore.collection('patients', ref => ref.where('first_name', '==', first_name).where('last_name', '==', last_name))
    .snapshotChanges().pipe(map(actions => actions.map(a => ({ data: a.payload.doc.data() }))));
  }

  getPatientById(id: string){
    return this.firestore.collection('patients', ref => ref.where('id', '==', id))
    .snapshotChanges().pipe(map(actions => actions.map(a => ({ data: a.payload.doc.data() }))));
  }
}
