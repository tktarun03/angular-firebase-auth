import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Angular Firebase Authentication</h1>
      <button (click)="login()">Login with Google</button>
      <button (click)="logout()" *ngIf="user">Logout</button>
      <p *ngIf="user">Welcome, {{ user.displayName }}</p>
    </div>
  `,
  styles: ['.container { text-align: center; margin-top: 50px; }']
})
export class AppComponent {
  user: firebase.User | null = null;

  constructor(public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => this.user = user);
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}