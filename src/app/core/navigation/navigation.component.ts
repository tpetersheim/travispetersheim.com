import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  readonly navLinks: { title: string, url: string}[] = [
    { title: 'Home', url: '/home' },
    { title: 'Cora Cam', url: '/cora' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
