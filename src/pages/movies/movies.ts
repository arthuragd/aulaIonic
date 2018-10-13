import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',

  providers: [
    MoviesProvider
  ]
})
export class MoviesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesProvider: MoviesProvider) {
  }

  ionViewDidLoad() {
    this.loadMovies();
  }

  //Objeto JSON
  public movies = new Array<any>();

  loadMovies(){
    this.moviesProvider.getMovies().subscribe(
      data=>{
        const response = (data as any);
        const obj = JSON.parse(response._body);
        
        this.movies = obj.results;
      }
    )
  }



}
