import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private db: DatabaseService){
    db.getPatientById("CWq3TCCz6tPbZUeF4isO").subscribe((_) => {
        console.log(_);
    });      
  }
}
