import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

interface Workout {
  name: string;
  exercises: string;
}

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss'
})
export class WorkoutsComponent {
  workouts: Workout[] = [
    {name: 'Pull 1', exercises: '5 exercises'},
    {name: 'Pull 2', exercises: '5 exercises'},
    {name: 'Leg 1', exercises: '5 exercises'},
    {name: 'Leg 2', exercises: '5 exercises'},
    {name: 'Abs', exercises: '5 exercises'},
    {name: 'Hit', exercises: '5 exercises'}
  ]


  addWorkout() {}

  goToPull() {
    window.location.href = '/pull';
  }
}
