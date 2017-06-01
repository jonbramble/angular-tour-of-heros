import {Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './models/hero';
//import { HEROES } from './mock-heroes';

import 'rxjs/add/operator/toPromise';


@Injectable()
 
 export class HeroService {

  private heroesUrl = 'heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl+'.json')
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
  	const url = `${this.heroesUrl}/${id}.json`;
    return this.http.get(url)
      .toPromise()
      .then(response=>response.json() as Hero)
      .catch(this.handleError)
             
  }

  update(hero: Hero): Promise<Hero> {
  	
    const url = `${this.heroesUrl}/${hero.id}.json`;
     return this.http.patch(url, JSON.stringify({'name':hero.name}), {headers: this.headers})
      .toPromise()
      .then(()=>hero)
      .catch(this.handleError);

  }


 }