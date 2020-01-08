import { InMemoryDbService } from'angular-in-memory-web-api';
import Hero from'./types/hero.type';
import { Injectable } from '@angular/core';
import { Observable } from'rxjs';
import Evil from './types/evil.type';



const httpOptions = {  
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  updateEvil(evil: Evil): Observable<any> {
    return this.http.put<any>(this.evilsUrl, evil, httpOptions);
  }

  insertEvil(evil: Evil): Observable<Evil> {
    return this.http.post<Hero>(this.evilsUrl, evil, httpOptions);
  }
  
  deleteEvil(evil: Evil): Observable<any> {
    return this.http.delete<any>(this.evilsUrl + '/' + evil.id);

}

export class ApiService implements InMemoryDbService {  
  createDb() { 
    const evils = [
      { id : 1, name : 'Joker', gender : 'male', video : 'zAGVQLHvwOY'},
      { id : 2, name : 'Mister Freeze', gender : 'male', video : ''},
      { id : 3, name : 'Le Pingouin', gender : 'male', video : '' },
      { id : 4, name : 'Poison Ivy', gender : 'female', video : '' },
      { id : 5, name : 'Harley Queen', gender : 'female', video : '' },
    ];
  return { evils };
  }

  genId(evils: Evil[]): number {
    return evils.length > 0 ? Math.max(...evils.map(evil => evil.id)) + 1 : 11;  
  }

  updateEvil(evil: Evil): Observable<any> {
    return this.http.put<any>(this.evilsUrl, evil);
  }
}
