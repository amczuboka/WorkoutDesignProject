import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-pull',
  templateUrl: './pull.component.html',
  styleUrl: './pull.component.scss'
})
export class PullComponent {
  exercises = [
    { name: 'Pull ups', repetitions: '4x10' },
    { name: 'Bicep curls', repetitions: '4x8' },
    { name: 'Shrugs', repetitions: '5x8' },
    { name: 'Lat pulldowns', repetitions: '4x8' },
    { name: 'Barbell rows', repetitions: '4x10' },
  ];

  deleteExercise(index: number): void {
    this.exercises.splice(index, 1);
  } 

  addExercise(): void {
    window.location.href = '/my-exercises';
  }
}
