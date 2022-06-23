import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../common/services/pokemon.service';
import {Pokemon, PokemonResponse} from '../../common/services/pokemon.interface';
import {forkJoin, map, mergeAll, Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  starterPokemon: Observable<Array<Pokemon>> = this.pokemonService
    .pokemon()
    .pipe(
      map(({results}: PokemonResponse) =>
        forkJoin(results
          .map(pokemon => this.pokemonService.getPokemonByUrl(pokemon)))),
    )
    .pipe(mergeAll())

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  }

}
