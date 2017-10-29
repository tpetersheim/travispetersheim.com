import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoraComponent } from './cora/cora.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoraComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
