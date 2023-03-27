import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userList: any[] = [];

  email: any;
  firstname: any;
  lastname: any;
  summaries = [{"name": "Senthil Kumar", "amount": "100.00", "date": "24/03/2023", "status": "debit"},
{ "name": "Kumar", "amount": "1000.00", "date": "25/03/2023", "status": "credit"},
{ "name": "Consolidate charges", "amount": "1000.00", "date": "25/03/2023", "status": "debit"}]
  constructor(public auth: UserService) { }

  ngOnInit(): void {
    this.onLoad();
  }

  register() {
    this.auth.logout();
  }

  onLoad() {
    this.auth.onload().subscribe(res => {
      this.auth.loader = true;
      this.userList = res.map((e: any) => {
        const data = e.payload.doc.data();
        this.auth.loader = false;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
        data.id = e.payload.doc.id;
        return data;

      })

    }, err => {
      alert('Error while fetching student data');
    })

  }
}
