import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TaskEditSidebarComponent } from '../task-edit-sidebar/task-edit-sidebar.component';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
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
      title: 'Create a New Landing UI',
      description: 'Design modern and responsive landing page',
      priority: 'high',
      completed: false
    },
    {
      id: 2,
      title: 'Create Dashboard',
      description: 'Build analytics dashboard with charts',
      priority: 'medium',
      completed: false
    },
    {
      id: 3,
      title: 'Brand logo design',
      description: 'Design new company logo and branding',
      priority: 'low',
      completed: false
    },
    {
      id: 4,
      title: 'Create Dashboard',
      description: 'Complete user interface components',
      priority: 'medium',
      completed: false
    },
    {
      id: 5,
      title: 'Rebranding For Peak',
      description: 'Update visual identity and guidelines',
      priority: 'high',
      completed: false
    },
    {
      id: 6,
      title: 'Create Mobile UI',
      description: 'Responsive mobile application design',
      priority: 'low',
      completed: false
    },
    {
      id: 7,
      title: 'Create a New Marketing Project',
      description: 'Launch comprehensive marketing campaign',
      priority: 'medium',
      completed: true
    },
    {
      id: 8,
      title: 'Analyze New Sprint',
      description: 'Review team performance and metrics',
      priority: 'low',
      completed: true
    },
    {
      id: 9,
      title: 'Create New Icon Set',
      description: 'Design consistent icon library',
      priority: 'high',
      completed: true
    }
  ];

  get todoTasks(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }

  get completedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  createNewTask(): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: 'New Task',
      description: 'Task description',
      priority: 'low',
      completed: false
    };
    this.tasks.push(newTask);
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