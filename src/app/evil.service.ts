import { Injectable } from '@angular/core';
import Evil from './types/evil.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EvilService {

  private evilsUrl = 'api/evils';

  constructor(private http: HttpClient) { }

  getEvils(): Observable<Evil[]> {
    return this.http.get<Evil[]>(this.evilsUrl);  
  }  
    
  getEvilById(id: number): Observable<Evil> {
    return this.http.get<Evil>(this.evilsUrl + '/' + id);
  }
}
