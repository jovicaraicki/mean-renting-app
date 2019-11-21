import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isAgency = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(formSignup: NgForm) {
    // console.log(formSignup.form);
    this.authService.createUser(
      formSignup.form.value.name,
      formSignup.form.value.email,
      formSignup.form.value.password,
      formSignup.form.value.contactPhone,
      formSignup.form.value.address,
      formSignup.form.value.agency,
      formSignup.form.value.agencyReg
    );
    formSignup.reset();
  }

  onToggleAgency() {
    this.isAgency = !this.isAgency;
  }

}
