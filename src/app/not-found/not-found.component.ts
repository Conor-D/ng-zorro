import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
  click() {
    this.http.get('https://stackoverflow.com/questions/35439672/angular-2-how-to-get-observable-throw-globally/35439805')
      .subscribe(data => {
        console.info(data);
      });
  }

}
