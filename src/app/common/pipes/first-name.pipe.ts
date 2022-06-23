import {Pipe, PipeTransform} from '@angular/core';
import {Pokemon} from '../services/pokemon.interface';

@Pipe({
  name: 'firstName',
})
export class FirstNamePipe implements PipeTransform {

  transform(value: Pokemon['forms']): string {
    return value.length
      ? value[0].name
      : 'Unknown'
  }

}
