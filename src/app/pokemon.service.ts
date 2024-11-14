import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _httpClient = inject(HttpClient);

  private readonly _BASE_URI_ : string = "https://api.pokemontcg.io/v2/cards";

  constructor() { }

getAllCards$(): Observable<any> {
    return this._httpClient.get<any>(this._BASE_URI_);
  }
}
