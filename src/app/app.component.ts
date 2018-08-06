import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  day = 'Monday';
  poem$: any;

  constructor(public http: Http) {}

  ngOnInit() {
    this.poem$ = this.http.get('assets/poem.json', {}).pipe(
      map(data => {
        const poems = data.json();
        return poems[0].content;
      })
    );
  }
}
