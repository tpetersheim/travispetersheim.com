import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tp-image-stream',
  templateUrl: './image-stream.component.html',
  styleUrls: ['./image-stream.component.scss']
})
export class ImageStreamComponent implements OnInit {
  @ViewChild('stream') streamImageElement: ElementRef;
  @Input() url: string;
  public showError = false;
  public showStream = true;

  constructor() { }

  ngOnInit() {
  }

  onImgStreamError() {
    this.toggleStream(false);
  }

  fullscreen() {
    const el = this.streamImageElement.nativeElement;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  }

  private toggleStream(enable?: boolean) {
    enable = enable === undefined ? !this.showStream : enable;
    this.showError = !enable;
    this.showStream = enable;
  }

}
