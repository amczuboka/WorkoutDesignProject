import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PointsComponent } from './pages/points/points.component';
import { PullComponent } from './pages/pull/pull.component';

const routes: Routes = [
  {
    path: 'points',
    component: PointsComponent,
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'pull',
    component: PullComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
