import { Component, OnInit, Input } from '@angular/core';
import Evil from '../types/evil.type';

@Component({
  selector: 'app-evil-detail',
  templateUrl: './evil-detail.component.html',
  styleUrls: ['./evil-detail.component.css']
})
export class EvilDetailComponent implements OnInit {

  @Input() evil: Evil;

  constructor() { }

  ngOnInit() {
  }

}
