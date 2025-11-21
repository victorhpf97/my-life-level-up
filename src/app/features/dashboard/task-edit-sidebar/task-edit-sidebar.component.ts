import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../services/task.service';

interface PriorityOption {
  label: string;
  value: 'low' | 'medium' | 'high';
  severity: 'success' | 'warn' | 'danger';
}

interface TaskTypeOption {
  label: string;
  value: 'checkbox' | 'timer';
  icon: string;
}

@Component({
  selector: 'app-task-edit-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    DrawerModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DatePickerModule,
    SelectModule,
    RadioButtonModule,
    InputNumberModule,
    FormsModule
  ],
  templateUrl: './task-edit-sidebar.component.html'
})
export class TaskEditSidebarComponent {
  @Input() visible: boolean = false;
  @Input() task: Task | null = null;
  
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() taskSaved = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<string>();

  // Dados editáveis
  editTitle: string = '';
  editDescription: string = '';
  editCompleted: boolean = false;
  editPriority: 'low' | 'medium' | 'high' = 'low';
  editType: 'checkbox' | 'timer' = 'checkbox';
  editDuration: number = 15; // em minutos, padrão 15min
  editTaskDate: Date | null = null;

  priorityOptions: PriorityOption[] = [
    { label: 'Low Priority', value: 'low', severity: 'success' },
    { label: 'Medium Priority', value: 'medium', severity: 'warn' },
    { label: 'High Priority', value: 'high', severity: 'danger' }
  ];

  taskTypeOptions: TaskTypeOption[] = [
    { label: 'Simple Task', value: 'checkbox', icon: 'pi-check' },
    { label: 'Timer Task', value: 'timer', icon: 'pi-clock' }
  ];

  ngOnChanges() {
    if (this.task) {
      this.editTitle = this.task.title;
      this.editDescription = this.task.description;
      this.editCompleted = !!this.task.completed;
      this.editTaskDate = this.task.taskDate ? new Date(this.task.taskDate) : new Date();
      this.editPriority = this.task.priority;
      this.editType = this.task.type;
      this.editDuration = this.task.duration || 15;
    }
  }

  onSidebarHide() {
    this.visibleChange.emit(false);
  }

  onSave() {
    if (this.editTitle.trim()) {
      const updatedTask: Task = {
        id: this.task?.id,
        title: this.editTitle.trim(),
        description: this.editDescription.trim(),
        priority: this.editPriority,
        type: this.editType,
        completed: this.editCompleted,
        createdAt: this.task?.createdAt || new Date().toISOString(),
        taskDate: this.editTaskDate ? this.editTaskDate.toISOString() : undefined,
        // Configurar campos específicos do timer
        duration: this.editType === 'timer' ? this.editDuration : undefined,
        timeRemaining: this.editType === 'timer' ? this.editDuration * 60 : undefined,
        isRunning: this.editType === 'timer' ? false : undefined,
        isPaused: this.editType === 'timer' ? false : undefined,
        // Manter datas existentes se houver
        modifiedAt: this.task?.modifiedAt,
        completedAt: this.task?.completedAt
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
      this.editCompleted = !!this.task.completed;
      this.editPriority = this.task.priority;
      this.editType = this.task.type;
      this.editDuration = this.task.duration || 15;
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