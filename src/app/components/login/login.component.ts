import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public get LoginFormControl(): any {
    return this.LoginForm.controls;
  }

  constructor(
    private route: Router
    ) {}

  ngOnInit(): void {}

  onLogin() {
    console.log(this.LoginForm.value);
    this.route.navigate(['reception/customer-register'])
  }
}
