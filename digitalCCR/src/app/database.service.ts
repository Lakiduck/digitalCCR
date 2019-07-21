import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor(private firestore: AngularFirestore) { }

    getPatientByName(first_name: string, last_name: string) {
        return this.firestore.collection('patients', ref => ref.where('first_name', '==', first_name).where('last_name', '==', last_name))
            .snapshotChanges().pipe(map(actions => actions.map(a => ({ data: a.payload.doc.data() }))));
    }

    getPatientById(id: string) {
        return this.firestore.collection('patients').doc(id).get().pipe(map(a => ({ data: a.data() })));
    }

    getPatient(patient: DocumentReference) {
        return this.firestore.collection("patients").doc(patient.id.trim()).get().pipe(map(a => ({ data: a.data() })));
    }

    getProfessional(professional: DocumentReference) {
        return this.firestore.collection("professionals").doc(professional.id.trim()).get().pipe(map(a => ({ data: a.data() })));
    }

    getRole(role: DocumentReference) {
        return this.firestore.collection("roles").doc(role.id.trim()).get().pipe(map(a => ({ data: a.data() })));
    }

    getMedication(medication: DocumentReference) {
        return this.firestore.collection("medication").doc(medication.id.trim()).get().pipe(map(a => ({ data: a.data() })));
    }

    getMedicationByName(name: string) {
        return this.firestore.collection('medication', ref => ref.where('name', '==', name))
            .snapshotChanges().pipe(map(actions => actions.map(a => ({ data: a.payload.doc.data() }))));
    }

    getMedicationById(id: string) {
        return this.firestore.collection('medication').doc(id.trim()).get().pipe(map(a => ({ data: a.data() })));
    }

    getAppointment(appointment: DocumentReference) {
        return this.firestore.collection("medication").doc(appointment.id.trim()).get().pipe(map(a => ({ data: a.data() })));
    }

    getCurrentUser(user: firebase.User) {
        return this.firestore.collection('users', ref => ref.where('userid', '==', user.uid)).snapshotChanges().pipe(map(a => a.map(b => ({ data: b.payload.doc.data() }))))
    }

    getDocumentsByTags(tags: Array<string>) {
        return this.firestore.collection('documents', ref => ref.where('tags', 'array-contains', tags[0])).snapshotChanges().pipe(map(a => a.map(b => ({ data: b.payload.doc.data() }))));

    }
}
