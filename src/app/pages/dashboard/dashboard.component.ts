import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/core/auth-service.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router , private af: AngularFireAuth) {
    af.authState.subscribe(res => {
      if(!res){
        router.navigateByUrl('');
      }
    });
   }

  ngOnInit() {
  }


}
