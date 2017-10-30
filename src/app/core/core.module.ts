import { AppRoutingModule } from './../app-routing.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    Ng2Webstorage.forRoot({prefix: 'tp', separator: '-'})
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  providers: [
    HttpClient,
    HeaderService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
