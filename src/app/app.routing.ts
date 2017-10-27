import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { globalRoutes } from './global/global.routing';
import { accountRoutes } from './account/account.routing';

const routes: Routes = [
  ...globalRoutes,
  ...accountRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
