import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, onValue, remove, update, Database } from 'firebase/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Task {
  id?: string; // Firebase usa string para IDs
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  type: 'checkbox' | 'timer';
  duration?: number; // em minutos
  timeRemaining?: number; // em segundos
  accumulatedElapsed?: number; // em segundos - total já decorrido salvo no backend
  spent?: boolean; // marca se a task já foi usada como moeda
  isRunning?: boolean;
  isPaused?: boolean;
  timerStartedAt?: string; // ISO string - quando o timer foi iniciado
  // Datas
  createdAt: string; // ISO string
  modifiedAt?: string; // ISO string
  completedAt?: string; // ISO string
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private app = initializeApp(environment.firebase);
  private db: Database = getDatabase(this.app);
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  loadTasks(): void {
    const tasksRef = ref(this.db, 'tasks');
    
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const tasks: Task[] = [];
      
      if (data) {
        Object.keys(data).forEach(key => {
          tasks.push({
            id: key,
            ...data[key]
          });
        });
      }
      
      this.tasksSubject.next(tasks);
    }, (error) => {
      console.error('Erro ao carregar tasks do Firebase:', error);
    });
  }

  async createTask(taskData: Omit<Task, 'id' | 'createdAt' | 'modifiedAt' | 'completedAt'>): Promise<void> {
    const now = new Date().toISOString();
    
    const task: Omit<Task, 'id'> = {
      ...taskData,
      createdAt: now,
      modifiedAt: now
    };
    
    console.log('📝 TaskService.createTask - dados recebidos:', taskData);
    console.log('📝 TaskService.createTask - task final:', task);
    
    const tasksRef = ref(this.db, 'tasks');
    const newTaskRef = push(tasksRef);
    await set(newTaskRef, task);
    
    console.log('✅ Task criada no Firebase com sucesso!');
  }

  async updateTask(taskId: string, updates: Partial<Task>): Promise<void> {
    const now = new Date().toISOString();
    
    const updateData: any = {
      ...updates,
      modifiedAt: now
    };
    
    // Se estiver marcando como completed, adicionar completedAt
    if (updates.completed === true) {
      updateData.completedAt = now;
    }
    // Se estiver desmarcando como completed, remover completedAt
    else if (updates.completed === false) {
      updateData.completedAt = null;
    }

    // Se timerStartedAt for undefined ou null, remover o campo
    if (updates.timerStartedAt === undefined || updates.timerStartedAt === null) {
      updateData.timerStartedAt = null;
    }

    // Limpar valores undefined (Firebase não aceita)
    Object.keys(updateData).forEach(key => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });
    
    console.log('💾 Updating task in Firebase:', { taskId, updateData });
    
    const taskRef = ref(this.db, `tasks/${taskId}`);
    await update(taskRef, updateData);
    
    console.log('✅ Task updated successfully in Firebase');
  }

  async deleteTask(taskId: string): Promise<void> {
    const taskRef = ref(this.db, `tasks/${taskId}`);
    await remove(taskRef);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }
}