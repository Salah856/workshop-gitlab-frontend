import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from "./component/heroes/heroes.component";
import {HeroDetailComponent} from "./component/hero-detail/hero-detail.component";

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
