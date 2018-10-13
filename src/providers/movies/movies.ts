import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  headers = new Headers({'user-key': '1234567890123'});
  options = new RequestOptions ({headers: this.headers}); 
  
  constructor(public http: Http) {
  }

  getMovies(){
    return this.http.get("/films/" );
  }
}
