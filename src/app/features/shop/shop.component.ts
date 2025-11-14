import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TaskService, Task } from '../../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
  tasks: Task[] = [];
  private sub?: Subscription;

  // counts filtered to year 2025
  highPriorityCount = 0; // represented by aku aku
  normalCount = 0; // represented by box

  products = [

    
   
       {
      id: 'musica',
      title: 'Tocar música',
      image: 'assets/img/musica.jpg',
      description: '2 horas de de música',
      priceHigh: 5,
      priceNormal: 12
    },
     {
      id: 'justdance',
      title: 'Just Dance',
      image: 'assets/img/just dance.jpg',
      description: 'Jogar 2 horas de just dance',
      priceHigh: 7,
      priceNormal: 19
    },
     {
      id: 'minecraft',
      title: 'jogar minecraft',
      image: 'assets/img/minecraft.png',
      description: '2 horas de minecraft',
      priceHigh: 5,
      priceNormal: 12
    },
    
    {
      id: 'massage',
      title: 'Relaxing Massage',
      image: 'assets/img/massage.jpg',
      description: '30 minutos de massagem relaxante',
      priceHigh: 5,
      priceNormal: 12
    },
    {
      id: 'guitar',
      title: 'Guitar Hero',
      image: 'assets/img/guitar hero.png',
      description: 'jogar 10 músicas de guitar hero',
      priceHigh: 10,
      priceNormal: 25
    },
    
   
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.loadTasks();
    this.sub = this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks || [];
      this.recalculateCounts();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private recalculateCounts(): void {
    const yearFilter = 2025;
    const filtered = this.tasks.filter(t => {
      if (!t.createdAt) return false;
      const y = new Date(t.createdAt).getFullYear();
      return y === yearFilter;
    });

    this.highPriorityCount = filtered.filter(t => t.priority === 'high').length;
    this.normalCount = filtered.filter(t => t.priority !== 'high').length;
  }

  canBuy(product: { priceHigh: number; priceNormal: number }): boolean {
    return this.highPriorityCount >= product.priceHigh && this.normalCount >= product.priceNormal;
  }

  async buy(product: { id: string; title: string; priceHigh: number; priceNormal: number }): Promise<void> {
    // Recalculate to be safe
    this.recalculateCounts();

    if (!this.canBuy(product)) {
      console.warn('Recursos insuficientes para comprar', product.id);
      return;
    }

    const yearFilter = 2025;
    const available = this.tasks.filter(t => {
      if (!t.createdAt) return false;
      const y = new Date(t.createdAt).getFullYear();
      if (y !== yearFilter) return false;
      if ((t as any).spent) return false;
      return true;
    });

    // Select high priority tasks first for priceHigh
    const highCandidates = available.filter(t => t.priority === 'high').sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    const normalCandidates = available.filter(t => t.priority !== 'high').sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    const toSpend: Task[] = [];

    // pick high
    for (let i = 0; i < (product.priceHigh || 0); i++) {
      if (highCandidates[i]) toSpend.push(highCandidates[i]);
    }

    // pick normal
    for (let i = 0; i < (product.priceNormal || 0); i++) {
      if (normalCandidates[i]) toSpend.push(normalCandidates[i]);
    }

    // Final safety check
    if (toSpend.length === 0) {
      console.warn('Nenhuma task selecionada para gastar');
      return;
    }

    try {
      // Mark selected tasks as spent in Firebase
      const promises = toSpend.map(t => {
        if (!t.id) return Promise.resolve();
        return this.taskService.updateTask(t.id!, { spent: true } as any);
      });

      await Promise.all(promises);
      console.log('Compra efetuada:', product.id, 'tasks gastas:', toSpend.length);

      // Recalculate counts after purchase
      this.taskService.loadTasks();
    } catch (error) {
      console.error('Erro ao efetuar compra:', error);
    }
  }
}
