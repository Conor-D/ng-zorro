import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogining: boolean;
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private authService: AuthService, 
    private message: NzMessageService
  ) { }

  ngOnInit() {
  }

  signIn(f): void {
    this.isLogining = true;
    let user = f.value;
    this.authService.isInvalid(user).subscribe(invalid => {
      if (invalid) {
        this.isLogining = false;
        f.form.setErrors({invalid: true})
      } else {
        user.expiredDate = Date.now() + 10000;
        if (user.remember)
          localStorage.setItem('user', JSON.stringify(user));
        else
          sessionStorage.setItem('user', JSON.stringify(user));
        let url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        this.router.navigateByUrl(url);
      }
    });
  }
}
