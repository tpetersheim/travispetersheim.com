import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../core/header/header.service';

@Component({
  selector: 'tp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(headerService: HeaderService) {
    headerService.text = 'Welcome';
    headerService.subText = 'Random things I want to host on the web!';
   }

  ngOnInit() {
  }

}
