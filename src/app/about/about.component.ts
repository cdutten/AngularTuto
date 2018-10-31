import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  facts: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCatFacts().subscribe( data => {
        this.facts = data;
        console.log(data);
      }
    );
  }

}
