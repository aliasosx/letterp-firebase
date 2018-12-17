import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/core/auth-service.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loggedIn = false;
  constructor(private authService: AuthServiceService, private router: Router , private af: AngularFireAuth) {
    af.authState.subscribe(auth => {
      if(!auth){
        console.log(auth);
        this.loggedIn = true;
      }
    });
  }

  ngOnInit() {
  }

}
