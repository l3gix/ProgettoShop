import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProdottiComponent } from './component/prodotti/prodotti.component';
import { CarelloComponent } from './component/carello/carello.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminhomepageComponent } from './component/adminhomepage/adminhomepage.component';
import { AdminprodottiComponent } from './component/adminprodotti/adminprodotti.component';
import { AdminnewprodottiComponent } from './component/adminnewprodotti/adminnewprodotti.component';
import { ProdottoComponent } from './component/prodotto/prodotto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    ProdottiComponent,
    CarelloComponent,
    AdminhomepageComponent,
    AdminprodottiComponent,
    AdminnewprodottiComponent,
    ProdottoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
