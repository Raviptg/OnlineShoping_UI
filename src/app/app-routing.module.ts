import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './login/home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AddressComponent } from './address/address.component';
import { ChatComponent } from './chat/chat.component';
import { PaymentComponent } from './payment/payment.component';
import { PaypallComponent } from './paypall/paypall.component';
import { NetbankingComponent } from './netbanking/netbanking.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'user-home', component:UserHomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'cart', component:CartComponent},
  {path:'favorites', component:FavoritesComponent},
  {path:'address', component:AddressComponent},
  {path:'chat',component:ChatComponent},
  {path:'payment', component:PaymentComponent},
  {path:'paypall', component:PaypallComponent},
  {path:'netbanking', component:NetbankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
