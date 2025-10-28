import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';


const PRIMENG = [
  ButtonModule,
  CardModule,
  ProgressBarModule,
  DividerModule,
  AccordionModule
];

@Component({
  selector: 'app-root',
  imports: [CommonModule, ...PRIMENG],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  tasks = [
    { 
      // Propriedades que vão para o banco
      id: 'listening', 
      name: 'Train listening', 
      elapsedSeconds: 0, 
      goalSeconds: 2 * 60 * 60, // 2 horas
      status: 'not_started', // 'not_started' | 'in_progress' | 'paused' | 'completed'
      createdAt: new Date(),
      updatedAt: new Date(),
      
      // Propriedades apenas do frontend
      running: false,
      _timer: null as any
    },
    { 
      // Propriedades que vão para o banco
      id: 'saas', 
      name: 'Code SaaS', 
      elapsedSeconds: 0, 
      goalSeconds: 4 * 60 * 60, // 4 horas
      status: 'not_started',
      createdAt: new Date(),
      updatedAt: new Date(),
      
      // Propriedades apenas do frontend
      running: false,
      _timer: null as any
    },
    { 
      // Propriedades que vão para o banco
      id: 'jobs', 
      name: 'Apply to jobs', 
      elapsedSeconds: 0, 
      goalSeconds: 1 * 60 * 60, // 1 hora
      status: 'not_started',
      createdAt: new Date(),
      updatedAt: new Date(),
      
      // Propriedades apenas do frontend
      running: false,
      _timer: null as any
    },
  ];

  protected readonly title = signal('my-life-level-up');

  toggle(task: any) {
    if (task.running) {
      this.pause(task);
    } else {
      this.play(task);
    }
  }

  play(task: any) {
    if (task.running) return;
    
    // Atualiza o status e propriedades do banco
    if (task.status === 'not_started') {
      task.status = 'in_progress';
    } else if (task.status === 'paused') {
      task.status = 'in_progress';
    }
    task.updatedAt = new Date();
    
    // Atualiza propriedades do frontend
    task.running = true;
    task._timer = setInterval(() => {
      task.elapsedSeconds++;
      task.updatedAt = new Date();
      
      // Para automaticamente quando atingir o objetivo
      if (task.elapsedSeconds >= task.goalSeconds) {
        this.complete(task);
      }
    }, 1000);
  }

  pause(task: any) {
    // Atualiza propriedades do frontend
    task.running = false;
    if (task._timer) {
      clearInterval(task._timer);
      task._timer = null;
    }
    
    // Atualiza o status e propriedades do banco
    if (task.status === 'in_progress') {
      task.status = 'paused';
    }
    task.updatedAt = new Date();
  }

  complete(task: any) {
    // Para o timer
    this.pause(task);
    
    // Marca como completa
    task.status = 'completed';
    task.updatedAt = new Date();
  }

  // Reseta uma tarefa para o estado inicial
  reset(task: any) {
    // Para o timer se estiver rodando
    if (task.running) {
      this.pause(task);
    }
    
    // Reseta para o estado inicial
    task.elapsedSeconds = 0;
    task.status = 'not_started';
    task.updatedAt = new Date();
  }

  // Verifica se a tarefa pode ser iniciada/resumida
  canPlay(task: any): boolean {
    return ['not_started', 'paused'].includes(task.status) && !task.running;
  }

  // Verifica se a tarefa pode ser pausada
  canPause(task: any): boolean {
    return task.status === 'in_progress' && task.running;
  }

  // Verifica se a tarefa está completa
  isCompleted(task: any): boolean {
    return task.status === 'completed';
  }

  // Retorna o tempo restante em segundos
  getRemainingSeconds(task: any): number {
    return Math.max(0, task.goalSeconds - task.elapsedSeconds);
  }

  // Retorna o progresso em porcentagem (0-100)
  getProgress(task: any): number {
    if (task.goalSeconds === 0) return 0;
    const progress = (task.elapsedSeconds / task.goalSeconds) * 100;
    return Math.min(100, Math.max(0, Math.round(progress)));
  }

  // Formata segundos para HH:MM:SS
  formatTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}
