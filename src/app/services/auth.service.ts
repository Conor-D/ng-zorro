import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users = [{
    userName: 'admin',
    password: 'admin'
  }, {
    userName: 'xw-743x',
    password: '111111'
  }];

  constructor() { }

  isInvalid(user): Observable<boolean> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(!this.users.find(u => user.userName === u.userName && user.password === u.password));
      }, 2345)
    });
  }

  get isExpired(): Observable<boolean> {
    return Observable.create(observer => {
      setTimeout(() => {
        let expired = this.currentUser.expiredDate < Date.now();
        if (expired && this.currentUser.userName === "xw-743x") 
          observer.error(new Error());
        else
          observer.next(!expired);
      }, 2345)
    });
  }

  get currentUser() {
    return JSON.parse(sessionStorage.getItem('user') || localStorage.getItem('user'));
  }

  get isLoggedIn() {
    return !!this.currentUser;
  }
}
