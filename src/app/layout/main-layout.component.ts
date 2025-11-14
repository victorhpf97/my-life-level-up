import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DrawerModule,
    ButtonModule,
    MenuModule,
    TooltipModule
  ],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit {
  private document = inject(DOCUMENT);
  private authService = inject(AuthService);
  private router = inject(Router);
  
  sidebarVisible = signal(false);
  isDarkTheme = false;

  userMenuItems: MenuItem[] = [
    {
      label: 'Configurações',
      icon: 'pi pi-cog',
      command: () => {
        // Adicionar lógica de configurações
        console.log('Abrir configurações');
      }
    },
      {
      label: 'Comprar',
      icon: 'pi pi-shopping-cart',
      command: () => {
        // Adicionar lógica de configurações
        console.log('Abrir configurações');
      }
    },
    {
      label: 'Sair',
      icon: 'pi pi-sign-out',
      command: () => {
        this.onLogout();
      }
    }
  ];

  ngOnInit() {
    // Aplicar tema escuro por padrão para teste
    this.isDarkTheme = true;
    this.applyTheme();
  }

  async onLogout() {
    try {
      await this.authService.signOut();
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  }

  get userDisplayName(): string | null {
    return this.authService.userDisplayName;
  }

  get userPhotoURL(): string | null {
    return this.authService.userPhotoURL;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDarkTheme) {
      this.document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.document.documentElement.removeAttribute('data-theme');
    }
  }
  
  menuItems: MenuItem[] = [
    {
      label: 'DASHBOARDS',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-credit-card',
          command: () => this.router.navigate(['/dashboard'])
        },
        {
          label: 'Tasks',
          icon: 'pi pi-clock',
          command: () => this.router.navigate(['/tasks'])
        }
        ,
        {
          label: 'Eventos',
          icon: 'pi pi-calendar',
          command: () => this.router.navigate(['/events'])
        }
        ,
        {
          label: 'Timeline',
          icon: 'pi pi-history',
          command: () => this.router.navigate(['/timeline'])
        }
        ,
        {
          label: 'Loja',
          icon: 'pi pi-shopping-cart',
          command: () => this.router.navigate(['/shop'])
        }
      ]
    },
    {
      label: 'APPS',
      items: [
        {
          label: 'Calendar',
          icon: 'pi pi-calendar',
          command: () => {}
        },
        {
          label: 'Chat',
          icon: 'pi pi-comments',
          command: () => {}
        },
        {
          label: 'Files',
          icon: 'pi pi-folder',
          command: () => {}
        },
        {
          label: 'Mail',
          icon: 'pi pi-envelope',
          command: () => {}
        }
      ]
    },
    {
      label: 'UI KIT',
      items: [
        {
          label: 'Form Layout',
          icon: 'pi pi-id-card',
          command: () => {}
        },
        {
          label: 'Input',
          icon: 'pi pi-check-square',
          command: () => {}
        },
    
      ]
    }
  ];

  // (no debug hooks) 
}