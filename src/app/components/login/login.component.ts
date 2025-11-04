import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private authService = inject(AuthService);

  loading = false;

  async onGoogleLogin() {
    try {
      this.loading = true;
      await this.authService.signInWithGoogle();
    } catch (error) {
      console.error('Erro no login:', error);
      // Aqui você pode mostrar uma mensagem de erro usando PrimeNG Toast
    } finally {
      this.loading = false;
    }
  }
}