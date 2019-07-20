import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../auth-state.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
  });

  constructor(private AuthState: AuthStateService, private router: Router) {

   }

   loginSubmit(){
     this.AuthState.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).subscribe((data) => {
       console.log(data);
     });
   }

  ngOnInit() {
  }

}
