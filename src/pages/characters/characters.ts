import { CharactersProvider } from './../../providers/characters/characters';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CharactersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',

  providers:[
    CharactersProvider
  ]
})
export class CharactersPage {

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private characterProvider: CharactersProvider
    ){
  }

  ionViewDidLoad() {
    this.loadCharacters();
  }

  //Objeto JSON
  public characters = new Array<any>();
  public i = 0;
  public avanc = true;

  loadCharacters(){
    if (this.avanc) {
      this.i = this.i + 1;
    }
    if (this.avanc == false) {
      this.i = this.i - 1;
    }
    this.characterProvider.getCharacters(this.i).subscribe(
      data=>{
        const response = (data as any);
        const obj = JSON.parse(response._body);
        
        this.characters = obj.results;
      }
    )
  }
}
