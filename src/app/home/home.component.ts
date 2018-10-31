import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'home';

  constructor(private data: DataService) { }

  users: Object;

  ngOnInit() {
  }

  firstClick() {
      console.log('Vo so re hacker, sabes usar la consola');
      this.data.getUsers().subscribe(data => {
         this.users = data;
         console.log(this.users);
        }
      );
  }
}
