import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './models/hero';
import { HeroService } from './hero.service';

import templateString from './templates/heroes.component.html'


@Component({
  selector: 'my-heroes',
  template: templateString
  })

export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
    ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
   this.selectedHero = hero;
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
  }


 }
