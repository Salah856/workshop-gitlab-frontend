import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
