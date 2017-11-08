import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: '', component: LandingComponent},
    // {path: 'apparel', component: ApparelComponent},
    // {path: 'apparel/new', component: ApparelNewComponent},
    // {path: 'apparel/show/:id', component: ApparelShowComponent},
    // {path: 'bikes', component: BikeStoreComponent},
    // {path: 'bikes/new', component: BikeStoreNewComponent},
    // {path: 'bikes/show/:id', component: BikeStoreShowComponent},
    // {path: 'accessories', component: AccessoriesComponent},
    // {path: 'accessories/new', component: AccessoriesNewComponent},
    // {path: 'accessories/show/:id', component: AccessoriesShowComponent},
    {path: 'cart', component: CartComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }