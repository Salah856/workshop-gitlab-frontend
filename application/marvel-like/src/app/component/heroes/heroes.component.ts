import { Component, OnInit } from '@angular/core';
import { Hero } from "../../entity/hero";
import { HeroService } from "../../service/hero/hero.service";
import {LoadingService} from "../../service/loading/loading.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  private heroes: Hero[];

  constructor(private heroService: HeroService, private loader:LoadingService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() : void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.loader.emit();
      });
  }
}
