import {NgModule} from '@angular/core';
import {FirstNamePipe} from './first-name.pipe';

@NgModule({
  declarations : [FirstNamePipe],
  exports: [FirstNamePipe],
})
export class FirstNamePipeModule {

}
