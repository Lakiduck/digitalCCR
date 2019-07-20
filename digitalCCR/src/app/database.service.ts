import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
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
    return this.firestore.collection('patients').doc(id).get().pipe(map(a => ({data: a.data()})));
  }

  getPatient(patient: DocumentReference){
    return this.firestore.collection("medication").doc(patient.id.trim()).get().pipe(map(a => ({data: a.data()})));
  }

  getMedication(medication: DocumentReference){      
      return this.firestore.collection("medication").doc(medication.id.trim()).get().pipe(map(a => ({data: a.data()})));  
  }

  getMedicationByName(name: string){
    return this.firestore.collection('patients', ref => ref.where('name', '==', name))
    .snapshotChanges().pipe(map(actions => actions.map(a => ({ data: a.payload.doc.data() }))));
  }

  getMedicationById(id: string){
    return this.firestore.collection('medication').doc(id.trim()).get().pipe(map(a => ({data: a.data()})));
  }

  getAppointment(appointment: DocumentReference){
    return this.firestore.collection("medication").doc(appointment.id.trim()).get().pipe(map(a => ({data: a.data()})));
  }
}
