import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  errorMessage = 'ERROR';
  successMessage = 'SUCCESS';
  registerForm: FormGroup;
  userModel: FirebaseUserModel;

  constructor(public authService: AuthService) {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl(''),
      reenterpassword: new FormControl('')
    })
    this.userModel = new FirebaseUserModel();
    
   }

  ngOnInit() {
  }

  test() {
    console.log(this.registerForm.value);
  }


  tryRegister(){
    this.userModel.email = this.registerForm.value.email;
    this.userModel.password = this.registerForm.value.password;

    console.log(this.userModel);
    this.authService.doRegister(this.userModel)
    .then( res => {
      console.log(res);
      console.log("success");

    }, err => {
      console.log(err);
      console.log(this.userModel);}) 
  }
}
