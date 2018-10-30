import { Component, OnInit } from '@angular/core';
import { interval} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {
  h1Style = false;
  title = 'home';
  today: number ;
  private user: object;

  constructor(private http: HttpClient) {
    this.http.get('https://catfact.ninja/fact').subscribe(data => {
        console.log(data);
        this.user = data;
    });
  }

  ngOnInit() {
    this.getTime();
  }

  firstClick() {
      this.h1Style = true;
      console.log('Vo so re hacker, sabes usar la consola');
  }

  copyText() {
      console.log('QUE ONDA!!!!');
  }

  cutText() {
      console.log('A mi no me cortas nada, yo me quedo aca vieja');
  }

  private getTime() {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n => {
        this.today = Date.now();
    });
  }
}
