import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/core/auth-service.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn = false;
  constructor(private authService: AuthServiceService, private router: Router , private af: AngularFireAuth) {
    af.authState.subscribe(auth => {
      if(!auth){
        console.log(auth);
        this.loggedIn = true;
      }
    });
  }
  banner = "LETTER-P";
  ngOnInit() {
    this.banner = "LETTER-P";
  }
  logout(){

    this.authService.doGoogleLogout().then(res=>{
      if(res){
        console.log('Logout process');
        this.router.navigateByUrl('/');
      }
    }).catch(console.log);
  }
}
