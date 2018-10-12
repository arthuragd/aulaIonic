
import { Component } from '@angular/core';

import { CharactersPage } from './../characters/characters';
import { MoviesPage } from './../movies/movies';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MoviesPage;
  tab2Root = CharactersPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
