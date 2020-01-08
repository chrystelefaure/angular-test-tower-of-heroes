import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvilService } from '../evil.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import Evil from '../types/evil.type';


@Component({
  selector: 'app-evil-edit',
  templateUrl: './evil-edit.component.html',
  styleUrls: ['./evil-edit.component.css']
})
export class EvilEditComponent implements OnInit {

  
  evil;
  
  
  constructor(private route: ActivatedRoute, private evilService: EvilService, private location: Location, private router: Router) {
    
  }


  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.evilService.getEvilById(id).subscribe((evil: Evil) =>this.evil = evil);
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.router.navigate(['/']);
  }

}
