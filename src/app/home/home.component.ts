import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   h1Style = false;

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
      this.h1Style = true;
      console.log('Vo so re hacker, sabes usar la consola');
  }

  copyText() {
      console.log('Viste?');
  }

  cutText() {
      console.log('A mi no me cortas nada, yo me quedo aca vieja');
  }
}
