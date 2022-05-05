import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  RegisterForm = new FormGroup({
    memberId: new FormControl('', Validators.required,),
    titleName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    updateBy: new FormControl('', Validators.required),
  });
  public get RegisterFormControl(): any {
    return this.RegisterForm.controls
  }

  constructor() {
    
  }

  ngOnInit(): void {}

  onSubmit(){
    console.log('submit');
    console.log(this.RegisterForm.value);
    
  }

  onClickTab(key:any){
    console.log(key);
    this.RegisterForm.reset()
    this.RegisterForm.controls['memberId'].disable()
  }

  onInputGender(e:any){
    console.log(e.target.value);
    
  }
}
