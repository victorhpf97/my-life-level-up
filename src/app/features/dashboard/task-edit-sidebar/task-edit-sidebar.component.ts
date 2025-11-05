import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  type: 'checkbox' | 'timer';
  duration?: number; // em minutos
  timeRemaining?: number; // em segundos
  isRunning?: boolean;
  isPaused?: boolean;
}

interface PriorityOption {
  label: string;
  value: 'low' | 'medium' | 'high';
  severity: 'success' | 'warn' | 'danger';
}

@Component({
  selector: 'app-task-edit-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    DrawerModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    FormsModule
  ],
  templateUrl: './task-edit-sidebar.component.html'
})
export class TaskEditSidebarComponent {
  @Input() visible: boolean = false;
  @Input() task: Task | null = null;
  
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() taskSaved = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<number>();

  // Dados editáveis
  editTitle: string = '';
  editDescription: string = '';
  editPriority: 'low' | 'medium' | 'high' = 'low';

  priorityOptions: PriorityOption[] = [
    { label: 'Low Priority', value: 'low', severity: 'success' },
    { label: 'Medium Priority', value: 'medium', severity: 'warn' },
    { label: 'High Priority', value: 'high', severity: 'danger' }
  ];

  ngOnChanges() {
    if (this.task) {
      this.editTitle = this.task.title;
      this.editDescription = this.task.description;
      this.editPriority = this.task.priority;
    }
  }

  onSidebarHide() {
    this.visibleChange.emit(false);
  }

  onSave() {
    if (this.task && this.editTitle.trim()) {
      const updatedTask: Task = {
        ...this.task,
        title: this.editTitle.trim(),
        description: this.editDescription.trim(),
        priority: this.editPriority
      };
      
      this.taskSaved.emit(updatedTask);
      this.onSidebarHide();
    }
  }

  onCancel() {
    // Restaura valores originais
    if (this.task) {
      this.editTitle = this.task.title;
      this.editDescription = this.task.description;
      this.editPriority = this.task.priority;
    }
    this.onSidebarHide();
  }

  onDelete() {
    if (this.task) {
      this.taskDeleted.emit(this.task.id);
      this.onSidebarHide();
    }
  }

  getPriorityLabelFromValue(value: 'low' | 'medium' | 'high'): string {
    const option = this.priorityOptions.find(p => p.value === value);
    return option ? option.label : '';
  }
}