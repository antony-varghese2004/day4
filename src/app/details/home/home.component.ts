import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../../page/carousel/carousel.component';
import { AccordionComponent } from '../../page/accordion/accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccordionComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
