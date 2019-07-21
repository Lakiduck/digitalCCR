import { Injectable } from '@angular/core';
import { AuthStateService } from './auth-state.service';
import { DatabaseService } from './database.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppStateService {

    public currentUser: Observable<{data: {}}[]>;

    public currentReference: Object;

    public currentType: string;

    constructor(private auth: AuthStateService, private db: DatabaseService) {
        auth.user.subscribe((user) => {
            if (user != null){
                this.currentUser = db.getCurrentUser(user);
                this.currentUser.subscribe((_) => {
                    this.currentReference = _[0].data['reference'];
                    this.currentReference = _[0].data['type'];
                })
            }
        })
     }
}
