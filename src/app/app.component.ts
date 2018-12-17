import { Component } from '@angular/core';
import { AuthServiceService } from './core/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }
  title = 'letterp-firebase';

}
