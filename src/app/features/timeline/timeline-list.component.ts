import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

interface AreaCard {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  slug: string;
}

@Component({
  selector: 'app-timeline-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './timeline-list.component.html'
})
export class TimelineListComponent {
  areas: AreaCard[] = [
    {
      id: 'profession',
      title: 'Profissão',
      subtitle: 'Conquistas da sua carreira',
      image: 'assets/img/profissao.jpg',
      slug: 'profession'
    },
    {
      id: 'music',
      title: 'Música',
      subtitle: 'Ensaios, shows e práticas',
      image: 'assets/img/piano.jpg',
      slug: 'music'
    },
    {
      id: 'life',
      title: 'Vida com a Bocó',
      subtitle: 'Momentos e memórias pessoais',
      image: 'assets/img/eu e a boco.jpg',
      slug: 'life'
    }
  ];

  constructor(private router: Router) {}

  open(area: AreaCard) {
    this.router.navigateByUrl(`/timeline/${area.slug}`);
  }
}
