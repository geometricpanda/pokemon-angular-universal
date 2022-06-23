import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {FirstNamePipeModule} from '../common/pipes/first-name-pipe.module';
import {FirstSpritePipeModule} from '../common/pipes/first-sprite-pipe.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FirstNamePipeModule,
    FirstSpritePipeModule,
  ],
})
export class HomeModule {
}
