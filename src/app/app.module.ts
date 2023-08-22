import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { CurdComponent } from './service/curd/curd.component';
import {  FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './login/home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AddressComponent } from './address/address.component';
import { ChatComponent } from './chat/chat.component';
import { ServiceLogComponent } from './service-log/service-log.component';
import { MatchPasswordDirective } from './match-password.directive';
import { PaymentComponent } from './payment/payment.component';
import { PaypallComponent } from './paypall/paypall.component';
import { NetbankingComponent } from './netbanking/netbanking.component';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    CurdComponent,
    HomeComponent,
    RegistrationComponent,
    UserHomeComponent,
    ProfileComponent,
    CartComponent,
    FavoritesComponent,
    AddressComponent,
    ChatComponent,
    ServiceLogComponent,
    MatchPasswordDirective,
    PaymentComponent,
    PaypallComponent,
    NetbankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ServiceLogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
