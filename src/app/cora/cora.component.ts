import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../core/header/header.service';

@Component({
  selector: 'tp-cora',
  templateUrl: './cora.component.html',
  styleUrls: ['./cora.component.scss']
})
export class CoraComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.text = 'Cora Cam';
    this.headerService.subText = `Cora's room webcam`;
   }

  ngOnInit() {
  }

}
