import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthState: AuthStateService) { }

  ngOnInit() {
  }

}
