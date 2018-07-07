import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardList = [112];
  innerWidth = window.innerWidth;
  constructor(private authService: AuthService) {}

  ngOnInit() { }

  signOut() {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  }

  get user() {
    return this.authService.currentUser;
  }
}
