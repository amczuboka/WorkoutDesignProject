import { Component } from '@angular/core';

interface Workout {
  name: string;
  sets: number;
  reps: number;
}

@Component({
  selector: 'my-exercises-page-list',
  templateUrl: './my-exercises-page.component.html',
  styleUrls: ['./my-exercises-page.component.scss']
})
export class MyExercisesPageComponent {
  workouts: Workout[] = [
    { name: 'Pushups', sets: 3, reps: 10 },
    { name: 'Squats', sets: 4, reps: 12 },
    { name: 'Pull-ups', sets: 3, reps: 8 },
    { name: 'Planks', sets: 3, reps: 60 },
    { name: 'Lunges', sets: 3, reps: 10 }
  ];

  addWorkout() {
  }
}

