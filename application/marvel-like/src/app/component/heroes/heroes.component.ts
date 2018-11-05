import { Component, OnInit } from '@angular/core';
import { Hero } from "../../entity/hero";
import { HeroService } from "../../service/hero/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  private selectedHero: Hero;
  private heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() : void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        console.log(this.heroes);
      });
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

}
