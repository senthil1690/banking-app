import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  firstname: string = '';
  lastname: string = '';
  aadhar: any = '';
  pan: any = '';

  alert = false;
  alertMsg = '';


  constructor(public auth: UserService) { }

  ngOnInit(): void {
  }


  register() {
    if (this.email == '') {
      this.alert = true;
      this.alertMsg = "Email cannot be empty";
      alert("Email cannot be empty");
    }
    if (this.password == '') {
      this.alert = true;
      this.alertMsg = "Password cannot be empty";
      alert("Password cannot be empty");
    }
    if (this.firstname == '') {
      this.alert = true;
      this.alertMsg = "first name cannot be empty";
      alert("First name cannot be empty");
    }
    if (this.lastname == '') {
      this.alert = true;
      this.alertMsg = "Last name cannot be empty";
      alert("Last name cannot be empty");
    }
    if (this.aadhar == '') {
      this.alert = true;
      this.alertMsg = "Aadhar cannot be empty";
      alert("Aadhar cannot be empty");
    }
    if (this.pan == '') {
      this.alert = true;
      this.alertMsg = "PAN cannot be empty";
      alert("PAN cannot be empty");
    }

    this.auth.register(this.email, this.password, this.firstname, this.lastname, this.aadhar,
      this.pan);
    this.email = '';
    this.password = '';
    this.firstname = '';
    this.lastname = '';
    this.aadhar = '';
    this.pan = '';
  }
}
