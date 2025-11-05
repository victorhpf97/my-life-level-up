import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { TaskEditSidebarComponent } from '../task-edit-sidebar/task-edit-sidebar.component';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  type: 'checkbox' | 'timer';
  imageUrl?: string;
  duration?: number; // em minutos
  timeRemaining?: number; // em segundos
  isRunning?: boolean;
  isPaused?: boolean;
}

@Component({
  selector: 'app-dashboard-task',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    TagModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TooltipModule,
    TaskEditSidebarComponent
  ],
  templateUrl: './dashboard-task.component.html'
})
export class DashboardTaskComponent {
  // Controle da sidebar de edição
  sidebarVisible: boolean = false;
  selectedTask: Task | null = null;

  tasks: Task[] = [
    {
      id: 1,
      title: 'Estudar Inglês',
      description: 'Praticar conversação e vocabulário',
      priority: 'high',
      completed: false,
      type: 'timer',
      imageUrl: 'assets/img/box.png',
      duration: 60, // 1 hora
      timeRemaining: 3600, // 60 * 60 segundos
      isRunning: false,
      isPaused: false
    },
    {
      id: 2,
      title: 'Create Dashboard',
      description: 'Build analytics dashboard with charts',
      priority: 'medium',
      completed: false,
      type: 'checkbox',
      imageUrl: 'assets/img/aku aku.png'
    },
    {
      id: 3,
      title: 'Meditação',
      description: 'Sessão de mindfulness',
      priority: 'medium',
      completed: false,
      type: 'timer',
      imageUrl: 'assets/img/aku aku.png',
      duration: 15, // 15 minutos
      timeRemaining: 900, // 15 * 60 segundos
      isRunning: false,
      isPaused: false
    },
    {
      id: 4,
      title: 'Create Dashboard',
      description: 'Complete user interface components',
      priority: 'medium',
      completed: false,
      type: 'checkbox',
      imageUrl: 'assets/img/box.png',

    },
    {
      id: 5,
      title: 'Exercícios',
      description: 'Treino de força e cardio',
      priority: 'high',
      completed: false,
      type: 'timer',
      imageUrl: 'assets/img/box.png',
      duration: 45, // 45 minutos
      timeRemaining: 2700, // 45 * 60 segundos
      isRunning: false,
      isPaused: false
    },
    {
      id: 6,
      title: 'Create Mobile UI',
      description: 'Responsive mobile application design',
      priority: 'low',
      completed: false,
      type: 'checkbox',
      imageUrl: 'assets/img/box.png'
    },
    {
      id: 7,
      title: 'Create a New Marketing Project',
      description: 'Launch comprehensive marketing campaign',
      priority: 'medium',
      completed: true,
      type: 'checkbox',
      imageUrl: 'assets/img/box.png',

    },
    {
      id: 8,
      title: 'Analyze New Sprint',
      description: 'Review team performance and metrics',
      priority: 'low',
      completed: true,
      type: 'checkbox',
      imageUrl: 'assets/img/box.png'
    },
    {
      id: 9,
      title: 'Create New Icon Set',
      description: 'Design consistent icon library',
      priority: 'high',
      completed: true,
      type: 'checkbox',
      imageUrl: 'assets/img/box.png',

    }
  ];

  get todoTasks(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }

  get completedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }

  toggleTaskCompletion(task: Task): void {
    if (task.type === 'checkbox') {
      task.completed = !task.completed;
    }
  }

  createNewTask(): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: 'New Task',
      description: 'Task description',
      priority: 'low',
      completed: false,
      type: 'checkbox'
    };
    this.tasks.push(newTask);
  }

  // Timer Methods
  startTimer(task: Task): void {
    if (task.type !== 'timer') return;
    
    task.isRunning = true;
    task.isPaused = false;
    
    const interval = setInterval(() => {
      if (task.timeRemaining! > 0 && task.isRunning) {
        task.timeRemaining!--;
      } else {
        clearInterval(interval);
        if (task.timeRemaining === 0) {
          this.completeTimerTask(task);
        }
      }
    }, 1000);
  }

  pauseTimer(task: Task): void {
    task.isRunning = false;
    task.isPaused = true;
  }

  resetTimer(task: Task): void {
    task.isRunning = false;
    task.isPaused = false;
    task.timeRemaining = (task.duration || 0) * 60; // Reset to original duration
  }

  completeTimerTask(task: Task): void {
    task.completed = true;
    task.isRunning = false;
    task.isPaused = false;
    // Aqui você pode adicionar notificação/som
    console.log(`Task "${task.title}" completada!`);
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }

  getTimerProgress(task: Task): number {
    if (!task.duration || !task.timeRemaining) return 0;
    const totalSeconds = task.duration * 60;
    const elapsedSeconds = totalSeconds - task.timeRemaining;
    return (elapsedSeconds / totalSeconds) * 100;
  }

  openEditSidebar(task: Task): void {
    this.selectedTask = task;
    this.sidebarVisible = true;
  }

  onTaskSaved(updatedTask: Task): void {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
    this.sidebarVisible = false;
    this.selectedTask = null;
  }

  onTaskDeleted(taskId: number): void {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.sidebarVisible = false;
    this.selectedTask = null;
  }

  onSidebarVisibleChange(visible: boolean): void {
    this.sidebarVisible = visible;
    if (!visible) {
      this.selectedTask = null;
    }
  }

  getPriorityLabel(priority: 'low' | 'medium' | 'high'): string {
    const labels = {
      low: 'Low Priority',
      medium: 'Medium Priority', 
      high: 'High Priority'
    };
    return labels[priority];
  }

  getPrioritySeverity(priority: 'low' | 'medium' | 'high'): 'success' | 'warn' | 'danger' {
    const severities = {
      low: 'success',
      medium: 'warn',
      high: 'danger'
    };
    return severities[priority] as 'success' | 'warn' | 'danger';
  }
}