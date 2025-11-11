import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
import { TaskService, Task } from '../../../services/task.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';

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
export class DashboardTaskComponent implements OnInit, OnDestroy {
  sidebarVisible: boolean = false;
  selectedTask: Task | null = null;
  tasks: Task[] = [];
  isLoading: boolean = true;
  private tasksSubscription?: Subscription;

  constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadTasks();
    
    // Criar um interval global que atualiza a UI a cada segundo
    setInterval(() => {
      // Força a detecção de mudanças para atualizar todos os cronômetros
      this.cdr.detectChanges();
      
      // Verificar se algum timer terminou
      this.checkCompletedTimers();
    }, 1000);
  }

  private checkCompletedTimers(): void {
    this.tasks.forEach(task => {
      if (task.type === 'timer' && task.isRunning && !task.completed) {
        const remainingTime = this.getDisplayTime(task);
        if (remainingTime <= 0) {
          console.log('⏰ Timer completed for:', task.title);
          this.completeTimerTask(task);
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
    
    // Não há mais intervals individuais para limpar
  }

  private loadTasks(): void {
    this.taskService.loadTasks();
    
    this.tasksSubscription = this.taskService.getTasks().subscribe(tasks => {
      console.error('Tasks carregadas:', tasks);
      this.tasks = tasks;
      this.isLoading = false;
      
      // Inicializar timers que estavam rodando
      this.initializeActiveTimers();
    });
  }

  private initializeActiveTimers(): void {
    this.tasks.forEach(task => {
      if (task.type === 'timer' && task.isRunning && task.timerStartedAt) {
        console.log('🔄 Reinitializing active timer for:', task.title);
        
        // Verificar se o timer já deveria estar completo
        const currentTime = this.getDisplayTime(task);
        if (currentTime <= 0) {
          console.log('⏰ Timer was completed while page was away');
          this.completeTimerTask(task);
        }
      }
    });
  }

  get todoTasks(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }

  get completedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }

  async toggleTaskCompletion(task: Task): Promise<void> {
    if (task.type === 'checkbox' && task.id) {
      const updatedCompleted = !task.completed;
      
      try {
        await this.taskService.updateTask(task.id, { completed: updatedCompleted });
        
        // Se a task foi completada, reproduzir som
        if (updatedCompleted) {
          this.playCompletionSound(task);
        }
      } catch (error) {
        console.error('Erro ao atualizar task:', error);
      }
    }
  }

  playCompletionSound(task: Task): void {
    let audioFile = '';
    
    // Regra baseada na prioridade
    if (task.priority === 'high') {
      audioFile = 'assets/audio/Aku aku sound.mp3';
    } else {
      audioFile = 'assets/audio/apple-sound.mp3';
    }
    
    if (audioFile) {
      const audio = new Audio(audioFile);
      audio.play().catch(error => {
        console.log('Erro ao reproduzir áudio:', error);
      });
    }
  }

  async createNewTask(): Promise<void> {
    const newTask = {
      title: 'New Task',
      description: 'Task description',
      priority: 'low' as const,
      completed: false,
      type: 'checkbox' as const
    };
    
    try {
      await this.taskService.createTask(newTask);
    } catch (error) {
      console.error('Erro ao criar task:', error);
    }
  }

  openCreateTaskSidebar(): void {
    this.selectedTask = {
      title: '',
      description: '',
      priority: 'low',
      completed: false,
      type: 'checkbox',
      createdAt: '', // Será preenchido ao salvar
      duration: 15 // Duração padrão para timer tasks
    };
    this.sidebarVisible = true;
  }

  // Timer Methods
  async startTimer(task: Task): Promise<void> {
    if (task.type !== 'timer' || !task.id) return;
    
    try {
      console.log('🚀 Iniciando timer para task:', task.title);
      // Ensure accumulatedElapsed exists
      if (task.accumulatedElapsed === undefined || task.accumulatedElapsed === null) {
        task.accumulatedElapsed = 0; // in seconds
      }

      // Definir o timestamp de início (lastActionAt)
      const startTimestamp = new Date().toISOString();

      // Atualizar estado local primeiro
      task.isRunning = true;
      task.isPaused = false;
      task.timerStartedAt = startTimestamp;

      console.log('📅 Timer started at:', startTimestamp, 'accumulatedElapsed:', task.accumulatedElapsed);

      // Atualizar APENAS os estados no Firebase (status + timestamp)
      await this.taskService.updateTask(task.id, {
        isRunning: true,
        isPaused: false,
        timerStartedAt: startTimestamp
      } as any);

      console.log('✅ Timer state saved to Firebase');
      
    } catch (error) {
      console.error('❌ Erro ao iniciar timer:', error);
    }
  }

  async pauseTimer(task: Task): Promise<void> {
    if (!task.id) return;
    
    try {
      console.log('⏸️ Pausando timer para task:', task.title);
      // Calcular elapsed total até o momento do pause
      const now = Date.now();
      const elapsedSinceStart = task.timerStartedAt ? Math.floor((now - new Date(task.timerStartedAt).getTime()) / 1000) : 0;
      const accumulated = (task.accumulatedElapsed || 0) + elapsedSinceStart;

      // Atualizar estado local primeiro
      task.isRunning = false;
      task.isPaused = true;
      task.accumulatedElapsed = accumulated;
      task.timerStartedAt = undefined; // Limpar timestamp local

      console.log('⏸️ Paused with accumulatedElapsed (s):', accumulated);

      // Atualizar APENAS os estados no Firebase (accumulatedElapsed + status)
      await this.taskService.updateTask(task.id, {
        isRunning: false,
        isPaused: true,
        accumulatedElapsed: accumulated,
        timerStartedAt: null // remover timestamp
      } as any);

      console.log('✅ Pause state saved to Firebase');
      
    } catch (error) {
      console.error('Erro ao pausar timer:', error);
    }
  }

  async resetTimer(task: Task): Promise<void> {
    if (!task.id) return;
    
    const originalDuration = (task.duration || 0) * 60;
    
    try {
      console.log('🔄 Resetando timer para task:', task.title);
      
      // Atualizar estado local primeiro
      task.isRunning = false;
      task.isPaused = false;
      task.accumulatedElapsed = 0;
      task.timerStartedAt = undefined; // Limpar timestamp
      
      console.log('🔄 Reset to original duration:', originalDuration);
      
      // Atualizar APENAS os estados no Firebase
      await this.taskService.updateTask(task.id, {
        isRunning: false,
        isPaused: false,
        accumulatedElapsed: 0,
        timerStartedAt: null // Usar null para remover o campo
      } as any);
      
      console.log('✅ Reset state saved to Firebase');
      
    } catch (error) {
      console.error('Erro ao resetar timer:', error);
    }
  }

  async completeTimerTask(task: Task): Promise<void> {
    if (!task.id) return;
    
    try {
      console.log('✅ Completando timer para task:', task.title);
      
      // Atualizar estado local primeiro
      task.completed = true;
      task.isRunning = false;
      task.isPaused = false;
      task.timerStartedAt = undefined; // Limpar timestamp local
      task.accumulatedElapsed = (task.duration || 0) * 60; // marcar como completo

      // Atualizar APENAS os estados no Firebase
      await this.taskService.updateTask(task.id, {
        completed: true,
        isRunning: false,
        isPaused: false,
        accumulatedElapsed: task.accumulatedElapsed,
        timerStartedAt: null // Limpar timestamp no Firebase
      } as any);
      
      console.log('✅ Task completed and saved to Firebase');
      
      // Reproduzir som de conclusão
      this.playCompletionSound(task);
    } catch (error) {
      console.error('Erro ao completar timer task:', error);
    }
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

  // Obter o tempo atual para display (local para responsividade)
  getDisplayTime(task: Task): number {
    if (task.type !== 'timer' || !task.id) return 0;
    // total em segundos
    const totalSeconds = (task.duration || 0) * 60;

    // elapsed: acumulado salvo + (agora - timerStartedAt) se estiver rodando
    const accumulated = task.accumulatedElapsed || 0;
    let elapsed = accumulated;

    if (task.isRunning && task.timerStartedAt) {
      const startTime = new Date(task.timerStartedAt).getTime();
      const now = Date.now();
      const extra = Math.floor((now - startTime) / 1000);
      elapsed = accumulated + extra;
    }

    const remaining = Math.max(0, totalSeconds - elapsed);

    // Log a cada 10s para ajudar debug
    if (elapsed % 10 === 0) {
      console.log('⏱️ Timer calculation (based on accumulated):', {
        taskTitle: task.title,
        accumulated,
        elapsed,
        totalSeconds,
        remaining,
        formatted: this.formatTime(remaining)
      });
    }

    return remaining;
  }

  getTimerProgress(task: Task): number {
    if (!task.duration) return 0;
    
    const totalSeconds = task.duration * 60;
    const currentTime = this.getDisplayTime(task);
    const elapsedSeconds = totalSeconds - currentTime;
    const progress = Math.max(0, Math.min(100, (elapsedSeconds / totalSeconds) * 100));
    
    console.log('📊 Progress calc:', {
      taskTitle: task.title,
      totalSeconds,
      currentTime,
      elapsedSeconds,
      progress: progress.toFixed(1) + '%'
    });
    
    return progress;
  }

  // Método para debug do timer
  debugTimer(task: Task): void {
    console.log('🐛 Debug Timer:', {
      title: task.title,
      type: task.type,
      duration: task.duration,
      timeRemaining: task.timeRemaining,
      isRunning: task.isRunning,
      isPaused: task.isPaused,
      timerStartedAt: task.timerStartedAt,
      currentTime: new Date().toISOString(),
      calculatedDisplayTime: this.getDisplayTime(task),
      formatted: this.formatTime(this.getDisplayTime(task)),
      progress: this.getTimerProgress(task).toFixed(1) + '%'
    });
  }

  openEditSidebar(task: Task): void {
    this.selectedTask = task;
    this.sidebarVisible = true;
  }

  async onTaskSaved(updatedTask: Task): Promise<void> {
    try {
      if (updatedTask.id) {
        // Editar task existente
        const updateData: any = {
          title: updatedTask.title,
          description: updatedTask.description,
          priority: updatedTask.priority,
          type: updatedTask.type
        };
        
        // Se é timer task, incluir campos específicos
        if (updatedTask.type === 'timer') {
          updateData.duration = updatedTask.duration;
          // accumulatedElapsed stores seconds already elapsed (start with 0)
          updateData.accumulatedElapsed = updatedTask.accumulatedElapsed || 0;
          updateData.isRunning = false;
          updateData.isPaused = false;
        }
        
        await this.taskService.updateTask(updatedTask.id, updateData);
      } else {
        // Criar nova task
        const newTaskData: any = {
          title: updatedTask.title,
          description: updatedTask.description,
          priority: updatedTask.priority,
          completed: false,
          type: updatedTask.type || 'checkbox'
        };
        
        // Se é timer task, adicionar campos específicos
        if (updatedTask.type === 'timer') {
          newTaskData.duration = updatedTask.duration;
          newTaskData.timeRemaining = (updatedTask.duration || 15) * 60; // Em segundos
          newTaskData.accumulatedElapsed = 0; // nenhum tempo percorrido ainda (em segundos)
          newTaskData.isRunning = false;
          newTaskData.isPaused = false;
          
          console.log('🕐 Criando timer task com duração:', newTaskData.duration, 'min, timeRemaining:', newTaskData.timeRemaining, 'seg');
        }
        
        await this.taskService.createTask(newTaskData);
      }
      
      this.sidebarVisible = false;
      this.selectedTask = null;
    } catch (error) {
      console.error('Erro ao salvar task:', error);
    }
  }

  async onTaskDeleted(taskId: string): Promise<void> {
    if (!taskId) {
      this.sidebarVisible = false;
      this.selectedTask = null;
      return;
    }
    
    try {
      await this.taskService.deleteTask(taskId);
      this.sidebarVisible = false;
      this.selectedTask = null;
    } catch (error) {
      console.error('Erro ao deletar task:', error);
    }
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

  // Método para obter a imagem baseada na prioridade
  getTaskImageUrl(task: Task): string {
    return task.priority === 'high' ? 'assets/img/aku aku.png' : 'assets/img/box.png';
  }
}