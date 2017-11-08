import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { LandingService } from './landing/landing.service';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/navbar.service';

import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService, LandingService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
