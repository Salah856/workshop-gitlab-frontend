import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../service/hero/hero.service";
import {Hero} from "../../entity/hero";
import {MatSnackBar} from "@angular/material";
import {LoadingService} from "../../service/loading/loading.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private snackBar:MatSnackBar,
    private loader:LoadingService
  ) { }

  ngOnInit() : void {
    this.getHero()
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => { this.hero = hero; this.loader.emit()  });
  }

  updateHero(): void {
    this.hero.liked = !this.hero.liked;
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.openSnackBar());
  }

  openSnackBar() {
    this.snackBar.open('Action saved!', null, {duration:500});
  }

}
