import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../auth-state.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private hide: Boolean = true;

    loading = false;

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });

    private errMsg: string;

    constructor(private AuthState: AuthStateService, private router: Router, private snackbar: MatSnackBar) {

    }

    loginSubmit() {
        this.loading = true;
        this.AuthState.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).subscribe(
            (data) => {
                this.loading = false;
                this.router.navigate(['/dashboard']);
            },
            (error) => {
                this.loading = false;
                // Handle Errors here.
                var errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                    this.errMsg = 'Wrong email/password.';
                } else {
                    this.errMsg = 'Wrong email/password.';
                    //error.message;
                }
                this.snackbar.open(this.errMsg, "dismiss", { duration: 3000 });
            }
        );
    }

    ngOnInit() {
    }

}
