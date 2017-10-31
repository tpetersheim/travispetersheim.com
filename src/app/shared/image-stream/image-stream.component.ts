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
  private videoOrientation = 0;

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

  rotate(change) {
    this.videoOrientation += change;

    if (this.videoOrientation < 0) {
        this.videoOrientation = 3;
    } else if (this.videoOrientation > 3) {
        this.videoOrientation = 0;
    }
  }

  public get orientationClass() {
    switch (this.videoOrientation) {
      case 1:
        return 'rotate90';
      case 2:
        return 'rotate180';
      case 3:
        return 'rotate270';
      default:
        return null;
    }
  }

}
