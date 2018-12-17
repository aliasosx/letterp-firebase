import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/auth-service.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService, public af: AngularFireAuth) {
    af.authState.subscribe(res => {
      if(res){
        router.navigateByUrl('dashboard');
      }
    });
  }

  ngOnInit() {

  }
  logIn(){
    this.authService.doGoogleLogin();
    window.location.reload();
  }
}
