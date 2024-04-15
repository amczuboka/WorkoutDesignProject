import { Component } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss'
})
export class RepositoryComponent {

}
