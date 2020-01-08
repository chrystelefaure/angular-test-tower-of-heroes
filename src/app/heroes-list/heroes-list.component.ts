import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes =  [
    { id : 1, name : 'Batman', gender : 'male' },
    { id : 2, name : 'Superman', gender : 'male' },
    { id : 3, name : 'Spiderman', gender : 'male' },
    ];

  selectedHero: Hero; // variable qui accueille le héros selectionné

  constructor() { }

  selectHero(hero: Hero) {  // Méthode qui permet d'accueillir le héros dans la méthode
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
