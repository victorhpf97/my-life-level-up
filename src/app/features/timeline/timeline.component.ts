import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';

interface MockEvent {
  id: string;
  title: string;
  date: string; // ISO
  description: string;
  status: 'completed' | 'platinum' | 'in-progress';
  image?: string;
  area?: 'profession' | 'music' | 'life';
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, CardModule, TimelineModule, AvatarModule, TagModule, ButtonModule],
  templateUrl: './timeline.component.html'
})
export class TimelineComponent implements OnInit {
  selectedArea: string | null = null;
  areaTitle = '';

  constructor(private route: ActivatedRoute, private router: Router) {}
  // Mocked events — some platinados (achievement completed)
  events: MockEvent[] = [
    {
      id: 'e1',
      title: 'Final de semana com a bocó',
      date: '2025-11-10T20:00:00.000Z',
      description: 'Fim de semana épico: cinema, chocolate quente e muito Minecraft.',
      status: 'platinum',
      image: 'assets/img/eu e a boco.jpg',
      area: 'life'
    },
    {
      id: 'e2',
      title: 'Maratona Just Dance',
      date: '2025-10-26T17:30:00.000Z',
      description: '2 horas de dança com amigos — platinei o ritmo perfeito.',
      status: 'completed',
      image: 'assets/img/just dance.jpg',
      area: 'music'
    },
    {
      id: 'e3',
      title: 'Guitarra ao vivo',
      date: '2025-09-14T19:00:00.000Z',
      description: 'Ensaios e showzinho — completei as 10 músicas do desafio.',
      status: 'completed',
      image: 'assets/img/guitar hero.png',
      area: 'music'
    },
    {
      id: 'e4',
      title: 'Noite do Tetris',
      date: '2025-08-02T21:15:00.000Z',
      description: 'Filme do Tetris + combo de pipoca — bem nostálgico.',
      status: 'completed',
      image: 'assets/img/tetris.jpg',
      area: 'profession'
    },
    {
      id: 'e5',
      title: 'Pequeno descanso',
      date: '2025-07-05T08:00:00.000Z',
      description: 'Dormir abraçadin + chocolate quente — momento relax.',
      status: 'platinum',
      image: 'assets/img/chocolate.jpg',
      area: 'life'
    }
  ];

  get eventsToShow(): MockEvent[] {
    if (!this.selectedArea) return this.events;
    return this.events.filter(e => e.area === this.selectedArea);
  }

  get eventsToShowPlatinumCount(): number {
    return this.eventsToShow.filter(e => e.status === 'platinum').length;
  }

  get eventsToShowCompletedCount(): number {
    return this.eventsToShow.filter(e => e.status === 'completed' || e.status === 'platinum').length;
  }

  formatDate(iso: string) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' });
    } catch (e) {
      return iso;
    }
  }

  countPlatinum() {
    return this.events.filter(e => e.status === 'platinum').length;
  }

  countCompleted() {
    return this.events.filter(e => e.status === 'completed' || e.status === 'platinum').length;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const area = params.get('area');
      this.selectedArea = area;
      this.areaTitle = this.titleForArea(area);
    });
  }

  titleForArea(area: string | null) {
    switch (area) {
      case 'profession': return 'Profissão';
      case 'music': return 'Música';
      case 'life': return 'Vida com a Bocó';
      default: return 'Sua jornada';
    }
  }

  backToList() {
    this.router.navigate(['/timeline']);
  }
}
