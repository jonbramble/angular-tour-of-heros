import { Component, OnInit } from '@angular/core'
import { Hero } from './models/hero';
import { HeroService } from './hero.service';

import templateString from './templates/dashboard.component.html'

@Component({
	selector: 'my-dashboard',
	template: templateString
})

export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];
  	constructor(private heroService: HeroService) { }

    ngOnInit(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

}