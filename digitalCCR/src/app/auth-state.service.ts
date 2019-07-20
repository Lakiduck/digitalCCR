import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable, from } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    private authState: any;
    public user: Observable<firebase.User | null>;

    constructor(public fireAuth: AngularFireAuth) {
        this.user = this.fireAuth.user;
        this.fireAuth.authState.subscribe((auth) => {
            this.authState = auth;
        });
    }

    signInWithEmailAndPassword(email: string, password: string) {
        let promise = this.fireAuth.auth.signInWithEmailAndPassword(email, password);
        return from(promise);
    }

    logout() {
        return this.fireAuth.auth.signOut();
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get id(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    get currentUserAnonymous(): boolean {
        return this.authenticated ? this.authState.isAnonymous : false
    }

    get currentUserDisplayName(): string {
        if (!this.authState)
            return 'Guest';

        if (this.currentUserAnonymous)
            return 'Anonymous';

        return (this.authState['displayName'] || 'User without a Name');
    }
}
