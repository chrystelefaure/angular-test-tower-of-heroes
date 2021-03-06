import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { EvilListComponent } from './evil-list/evil-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { EvilDetailComponent } from './evil-detail/evil-detail.component';
import { EvilEditComponent } from './evil-edit/evil-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    EvilListComponent,
    HeroDetailComponent,
    EvilDetailComponent,
    EvilEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,    
    HttpClientInMemoryWebApiModule.forRoot( 
      ApiService, { dataEncapsulation: false }
    ),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
