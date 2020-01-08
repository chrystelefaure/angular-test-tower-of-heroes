import { Component, OnInit } from '@angular/core';
import Hero from '../types/evil.type';
import { ivyEnabled } from '@angular/core/src/ivy_switch';
import Evil from '../types/evil.type';
import { EvilService } from '../evil.service';


@Component({
  selector: 'app-evil-list',
  templateUrl: './evil-list.component.html',
  styleUrls: ['./evil-list.component.css']
})
export class EvilListComponent implements OnInit {

  
  selectedEvil: Evil; //Variable
  evils: Evil[];
  
  constructor(private evilService: EvilService) { }

 

  selectEvil(evil: Evil) { //Méthode
    this.selectedEvil = evil;
  }

  ngOnInit() {
    this.evilService.getEvils().subscribe((heroes: Hero[]) =>this.evils = heroes); 
  }

}
