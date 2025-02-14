import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProdottiComponent } from './component/prodotti/prodotti.component';
import { CarelloComponent } from './component/carello/carello.component';
import { AdminhomepageComponent } from './component/adminhomepage/adminhomepage.component';
import { AdminprodottiComponent } from './component/adminprodotti/adminprodotti.component';
import { AdminnewprodottiComponent } from './component/adminnewprodotti/adminnewprodotti.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { ProdottoComponent } from './component/prodotto/prodotto.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path : 'register', component: RegisterComponent},
  { path : 'homepage', component: HomepageComponent, canActivate : [AuthGuard],children: [
    { path : '', redirectTo: 'prodotti', pathMatch: 'full'},
    { path: 'prodotti', component: ProdottiComponent, children : [
      { path : ':id', component: ProdottoComponent  },
    ]},
    { path : 'carello', component: CarelloComponent}
  ]},
  {path : 'adminhomepage', component: AdminhomepageComponent,canActivate : [AdminGuard], children: [
    {path : '', redirectTo: 'adminprodotti', pathMatch: 'full'},
    {path : 'adminprodotti', component : AdminprodottiComponent},
    {path : 'adminnewprodotti', component : AdminnewprodottiComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
