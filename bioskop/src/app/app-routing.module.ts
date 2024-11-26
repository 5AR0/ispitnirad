import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmDetaljiComponent } from './components/film-detalji/film-detalji.component';
import { LoginComponent } from './components/login/login.component';
import { KorpaComponent } from './components/korpa/korpa.component';


const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path: "film-detalji/:id", component: FilmDetaljiComponent},
  {path: "login", component: LoginComponent},
  {path: "korpa", component: KorpaComponent},
  {path: "",redirectTo: "/home",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


