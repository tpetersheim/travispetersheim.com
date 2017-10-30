import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'tp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public headerService: HeaderService) {}

  ngOnInit() {}
}
