import { Component, OnInit } from '@angular/core';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private fire:AngularFireAuth ) { }

  
public state: firebase.default.UserInfo ;
  ngOnInit(): void {
    this.fire.authState.subscribe((hi) => {
      if(hi){
        this.state= hi;
      }
      console.log(this.state)
    })
  }
  

  
async login()
 {
  const provider = new firebase.default.auth.GoogleAuthProvider();
  try{
    await this.fire.signInWithPopup(provider);
    alert('Successful Login')
  }catch(erro)
  {
    alert('Login Fail')
  }
 }
 async signout()
 {
   try{
     await this.fire.signOut()
     this.state=undefined;
     alert('Sign out success')
   }catch(erro){
     alert('Sign out fail')
   }
 }
  public navigate(x:any){
    this.router.navigate([x])
  }

}
