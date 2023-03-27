import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  alert = false;
  alertMsg = '';
  
  constructor(public auth: UserService) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email == '') {
      this.alert = true;
      this.alertMsg = "Email cannot be empty";
      alert("Email cannot be empty");
    }
    if (this.password == '') {
      this.alert = true;
      this.alertMsg = "Password cannot be empty";
      alert( "Password cannot be empty");
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
