import {Pipe, PipeTransform} from '@angular/core';
import {PokemonSprites} from '../services/pokemon.interface';

@Pipe({
  name: 'firstSprite',
})
export class FirstSpritePipe implements PipeTransform {

  transform(value: PokemonSprites): string | null {
    return value?.front_default;
  }

}
