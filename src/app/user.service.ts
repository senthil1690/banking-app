import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })


export class UserService {

    alert = false;
    alertMsg = '';
    loader = false;
    constructor(private afs: AngularFirestore, private fireAuth: AngularFireAuth, private router: Router) {

    }


    //login method

    login(email: string, password: string) {
        this.loader = true;
        this.fireAuth.signInWithEmailAndPassword(email.trim(), password).then(() => {
            localStorage.setItem('token', 'true');
            this.loader = false;
            this.router.navigate(['/home']);
        }, err => {
            this.alert = true;
            this.alertMsg = 'Something went wrong';
            alert("Something went wrong");
            this.router.navigate(['/login']);
        })
    }


    //register method

    register(email: string, password: string, firstname: string, lastname: string, pan: number, aadhar: number) {
        this.loader = true;
        this.fireAuth.createUserWithEmailAndPassword(email.trim(), password).then(() => {
            this.alert = true;
            this.loader = false;
            this.alertMsg = 'Registeration Successful';
            alert("Registeration Successful");
            this.router.navigate(['/login']);
            const record = {
                id: '',
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                pan: pan,
                aadhar: aadhar
            };
            record.id = this.afs.createId();
            return this.afs.collection('/users').add(record);
        }, err => {
            this.alert = true;
            this.alertMsg = err.message;
            alert(err.message);
            this.router.navigate(['/register']);
        })
    }


    //sign out method

    logout() {
        this.loader = true;
        this.fireAuth.signOut().then(() => {
            localStorage.removeItem('token');

            this.loader = false;
            this.router.navigate(['/login']);
        }, err => {
            this.alert = true;
            this.alertMsg = err.message;
            alert(err.message);
        })
    }


    onload() {
        return this.afs.collection('/users').snapshotChanges();
       
    }



}