import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent),
    canActivate: [loginGuard] // Impede que usuário logado acesse a página de login
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard], // Protege todas as rotas internas
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(c => c.DashboardComponent)
      },
      {
        path: 'tasks',
        loadComponent: () => import('./features/tasks/tasks.component').then(c => c.TasksComponent)
      }
      ,
      {
        path: 'shop',
        loadComponent: () => import('./features/shop/shop.component').then(c => c.ShopComponent)
      }
      ,
      {
        path: 'events',
        loadComponent: () => import('./features/events/events.component').then(c => c.EventsComponent)
      }
      ,
      {
        path: 'timeline',
        loadComponent: () => import('./features/timeline/timeline-list.component').then(c => c.TimelineListComponent)
      },
      {
        path: 'timeline/:area',
        loadComponent: () => import('./features/timeline/timeline.component').then(c => c.TimelineComponent)
      }
    ]
  }
];
