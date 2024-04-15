import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PointsComponent } from './pages/points/points.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { PullComponent } from './pages/pull/pull.component';
import { WorkoutsComponent } from "./pages/workouts/workouts.component";
import { MyExercisesPageComponent } from './pages/my-exercises-page/my-exercises-page.component';

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
    path: 'repository',
    component: RepositoryComponent,
  },
  {
    path: 'pull',
    component: PullComponent,
  },
  {
    path: 'workouts',
    component: WorkoutsComponent
  },
  {
    path: 'my-exercises',
    component: MyExercisesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }