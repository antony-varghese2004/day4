import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  department=[
    {
      id:1,
      Title:"MOBILITY",
      Image:"m1.jpeg",
      description:"",
      link:"/mobility"
    },
    {
      id:2,
      Title:"AEROSPACE & DEFENCE",
      Image:"a1.jpeg",
      description:"",
      link:"/aerospace"
    },
    {
      id:3,
      Title:"BANKING & FINANCES",
      Image:"b1.jpeg",
      description:"",
      link:"/bfs"
    },
    {
      id:4,
      Title:"INSURENCE",
      Image:"in1.jpeg",
      description:"",
      link:"/insurence"
    },
    {
      id:5,
      Title:"INDUSTRIAL",
      Image:"ind1.jpeg",
      description:"",
      link:"/industry"
    },
    {
      id:6,
      Title:"LOCOMOTIVE",
      Image:"l1.jpeg",
      description:"",
      link:"/locomotive"
    },
    {
      id:7,
      Title:"HEALTHCARE",
      Image:"h1.jpeg",
      description:"",
      link:"/healthcare"
    },
    {
      id:8,
      Title:"CYBER SECURITY",
      Image:"c1.jpeg",
      description:"",
      link:"/cyber"
    },
  ]

}
