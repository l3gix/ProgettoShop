import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProdottiComponent } from './component/prodotti/prodotti.component';
import { CarelloComponent } from './component/carello/carello.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path : 'register', component: RegisterComponent},
  { path : 'homepage', component: HomepageComponent, children: [
    { path: 'prodotti', component: ProdottiComponent},
    { path : 'carrello', component: CarelloComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
