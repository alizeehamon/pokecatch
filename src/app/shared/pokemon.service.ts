import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient) {}

  getSets(): Observable<any> {
    return this.http.get<any>('https://api.pokemontcg.io/v2/sets')
  }

  getCardsBySet(id:string): Observable<any> {
    return this.http.get<any>('https://api.pokemontcg.io/v2/cards?q=set.id:'+id)
  }
}
