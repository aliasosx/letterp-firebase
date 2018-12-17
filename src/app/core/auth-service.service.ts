import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router, public af : AngularFireAuth) { }
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.af.auth.signInWithPopup(provider).then(res => {
        resolve(res);
      });
    });
  }
   doGoogleLogout():Promise<any>{
    return new Promise((resolve, reject) => {
      this.af.auth.signOut().then(res=>{
        resolve(res);
      });
    });
  }
  isLoggedIn(){
    this.af.authState.subscribe(res=>{
      if(res){
        console.log(res);
        return true;
      } else {
        return false;
      }
    });
  }
}
