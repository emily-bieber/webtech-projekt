import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  checkIfLoggedIn(): boolean {
    this.isLoggedIn = this.auth.isLoggedin();
    return this.isLoggedIn;
  }

}
