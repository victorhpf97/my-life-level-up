import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';

interface EventTask {
  id: string;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, CardModule, CheckboxModule, ButtonModule, ProgressBarModule, FormsModule],
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  readonly storageKey = 'events:final-de-semana-boco:state';

  title = 'Final de semana com a bocó — 2ª semana de novembro';
  image = 'assets/img/eu e a boco.jpg';

  tasks: EventTask[] = [
    { id: 'minecraft', label: 'Jogar minecraft', checked: false },
    { id: 'ensaiar', label: 'Ensair 2 músicas', checked: false },
    { id: 'tetris', label: 'Assistir filme do tetris', checked: false },
    { id: 'chocolate', label: 'Tomar chocolate quente', checked: false },
    { id: 'dormir', label: 'Dormir abraçadin', checked: false }
  ];

  ngOnInit(): void {
    this.loadState();
  }

  get checkedCount(): number {
    return this.tasks.filter(t => t.checked).length;
  }

  get progress(): number {
    if (!this.tasks || this.tasks.length === 0) return 0;
    return Math.round((this.checkedCount / this.tasks.length) * 100);
  }

  get isAllChecked(): boolean {
    return this.checkedCount === this.tasks.length && this.tasks.length > 0;
  }

  // called from template when a checkbox changes
  saveState() {
    try {
      const payload = this.tasks.map(t => ({ id: t.id, checked: t.checked }));
      localStorage.setItem(this.storageKey, JSON.stringify(payload));
    } catch (e) {
      console.warn('Failed to save events state', e);
    }
  }

  private loadState() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return;
      const parsed: Array<{ id: string; checked: boolean }> = JSON.parse(raw);
      parsed.forEach(p => {
        const t = this.tasks.find(x => x.id === p.id);
        if (t) t.checked = !!p.checked;
      });
    } catch (e) {
      console.warn('Failed to load events state', e);
    }
  }
}
