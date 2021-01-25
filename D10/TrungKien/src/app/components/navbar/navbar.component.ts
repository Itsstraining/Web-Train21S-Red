import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private auth: AngularFireAuth) { }
  public x: firebase.default.UserInfo;

  ngOnInit(): void {
    this.auth.authState.subscribe((user) =>{
    if(user){
      this.x = user;
    }
    })  
  }

  public async Authlogin() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider)
      alert("đăng nhập thành công")
    } catch (err) {
      alert("toeq");
    }

  }

  public navigate(l: string) {
    this.router.navigate([l]);
  }

}
