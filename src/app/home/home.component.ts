import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { AppConfig } from '../app-config';
import { Observable } from 'rxjs';

export interface Card {
  id: number,
  title: string,
  url: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardList: Card[];
  innerWidth = window.innerWidth;
  constructor(private http: HttpClient, private authService: AuthService, @Inject(AppConfig) private config) { }

  ngOnInit() {
    setTimeout(() => {
      this.cards.subscribe(cards => {
        this.cardList = cards.splice(0, 50);
      })
    }, 0)
  }

  signOut() {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  }

  get cards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.config.ApiUrl + '/photos');
  }

  get user() {
    return this.authService.currentUser;
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
