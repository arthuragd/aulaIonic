import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CharactersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharactersProvider {

  constructor(public http: Http) {
   
  }

  getCharacters(i){
    return this.http.get("https://swapi.co/api/people/?page=" + i);
  }
}
