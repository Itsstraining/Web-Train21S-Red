import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router, private fireAuth: AngularFireAuth ) { }
  public x: firebase.default.UserInfo;

  ngOnInit(): void {
    this.fireAuth.authState.subscribe((user) => {
      if(user){
        this.x = user;
      }
    })
  }


  async login(){
    const provider = new firebase.default.auth.GoogleAuthProvider;
    try{
      await this.fireAuth.signInWithPopup(provider);
      alert("Đăng nhập thành công")
    }catch(err){
      alert("Không đăng nhập được")
    }
  }

  async logout(){
    const provider2 = new firebase.default.auth.GoogleAuthProvider;
      await this.fireAuth.signOut();
      alert("Đăng xuất thành công")
  }

  



  clickToCart(){
    this.router.navigate(['cartPage']);
  }

}
