import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {makeStateKey, TransferState} from '@angular/platform-browser';

import {Pokemon, PokemonResponse, PokemonSummary} from './pokemon.interface';
import {map, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient,
    private transferState: TransferState,
  ) {
  }

  pokemon(limit: number = 24, offset: number = 0): Observable<PokemonResponse> {
    const pokemonStateKey = makeStateKey<PokemonResponse>(`pokemon-${limit}-${offset}`);
    const cached = this.transferState.get(pokemonStateKey, null);

    if (cached) {
      return of(cached);
    }

    const url = new URL('https://pokeapi.co/api/v2/pokemon');
    url.searchParams.set('limit', limit.toString());
    url.searchParams.set('offset', offset.toString());

    return this
      .httpClient
      .get<PokemonResponse>(url.toString())
      .pipe(tap(data => this.transferState.set(pokemonStateKey, data)));
  }

  getPokemonByUrl(pokemon: PokemonSummary): Observable<Pokemon> {
    const stateKey = makeStateKey<Pokemon>(`pokemon-${pokemon.name}`);
    const cached = this.transferState.get(stateKey, null);

    if (cached) {
      return of(cached);
    }

    return this.httpClient
      .get<Pokemon>(pokemon.url)
      .pipe(map(({forms, sprites}) => ({forms, sprites})))
      .pipe(tap((data) => this.transferState.set(stateKey, data)));
  }

}
