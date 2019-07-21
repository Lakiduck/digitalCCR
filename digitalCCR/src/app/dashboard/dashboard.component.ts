import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../auth-state.service';
import { DatabaseService } from '../database.service';
import { AppStateService } from '../app-state.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private currentUser: Object;

    private loading: Boolean = true;

    userData: Object = {first_name: "", last_name: ""};

    private cards: Array<Object>;

    mode: string = "side";

    opened: boolean = true;

    title: string = "Digital Cancer Care Record"

    constructor(private auth: AuthStateService, private db: DatabaseService, private appstate: AppStateService, private router: Router) { }

    ngOnInit() {
        if (this.auth.authenticated) {
            this.auth.user.subscribe((user) => {
                this.db.getCurrentUser(user).subscribe((_) => {
                    this.currentUser = _[0].data;
                    this.buildUI();
                })
            })
        }
    }

    buildUI() {
        this.loading = false;
        console.log(this.currentUser);

        switch (this.currentUser['type']) {
            case 'patient':
                this.buildPatientUI();
                break;
            case 'professional':
                this.buildProfessionalUI();
                break;
            case 'nonprofessional':
                this.buildNonProfessionalUI();
                break;
        }
    }

    buildPatientUI(){
        this.db.getDocumentsByTags(['patient']).subscribe((_) => {
            this.cards = _;
        })

        this.db.getPatient(this.currentUser['reference']).subscribe((_) => {
            this.userData = _.data;
        })
    }

    buildProfessionalUI(){
        this.db.getProfessional(this.currentUser['reference']).subscribe((_) => {
            console.log(_);
            this.db.getRole(_.data['roles'][0]).subscribe((r) => {
                console.log(r);
                this.db.getDocumentsByTags(r.data['tags']).subscribe((a) => {
                    this.cards = a;
                })
            })
            
        })

        this.db.getProfessional(this.currentUser['reference']).subscribe((_) => {
            this.userData = _.data;
        })
        
    }

    buildNonProfessionalUI(){

    }

    logout(){
        this.auth.logout();
        this.router.navigate(['/login']);
    }

}
