import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './page/navbar/navbar.component';
import { AccordionComponent } from './page/accordion/accordion.component';
import { CarouselComponent } from './page/carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AccordionComponent,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
