import { Component } from '@angular/core';
import { CardsComponent } from '../../page/cards/cards.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
