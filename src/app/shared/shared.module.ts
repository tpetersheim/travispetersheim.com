import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageStreamComponent } from './image-stream/image-stream.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ImageStreamComponent
  ],
  providers: [
  ],
  entryComponents: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImageStreamComponent
  ]
})
export class SharedModule {
}
