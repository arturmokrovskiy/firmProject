import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetsComponent } from './planets/planets.component';
import { ViewPlanetComponent } from './planets/view-planet/view-planet.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/planets', pathMatch: 'full' },
  { path: 'planets',        component: PlanetsComponent },
  { path: 'planets/:id', component: ViewPlanetComponent },
  { path: '**', component: PlanetsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
