import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public email: FormControl;
  public password: FormControl;
  public isVisible = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.email = new FormControl( '');
    this.password = new FormControl( '');
    this.myForm = new FormGroup ({
      email: this.email,
      password: this.password
    })
  };
  private showError() {
    if (this.isVisible === false) {
      return this.isVisible = true;
    }
  }

  public login() {
    // service.login(this.myForm.value) => 
   const res = this.loginService.login(this.email.value, this.password.value);
   if( res ) {
      this.router.navigate(['/admin/products'])
   } else {
     this. showError();
   }
    // boolean (true/false)
    // if ( response === true ) => navigate 
    // else => error
    console.log(this.myForm.value);
  }

}
