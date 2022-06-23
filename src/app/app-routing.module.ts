import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
}

const routes: Routes = [
  home,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
