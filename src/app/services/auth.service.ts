import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  user$: Observable<User | null> = user(this.auth);

  constructor() {}

  // Login com Google
  async signInWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      // Adiciona scopes específicos se necessário
      provider.addScope('email');
      provider.addScope('profile');
      
      const result = await signInWithPopup(this.auth, provider);
      console.log('Login successful:', result.user);
      
      // Redireciona para o dashboard após login bem-sucedido
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Logout
  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Logout successful');
      
      // Redireciona para a página de login após logout
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  // Verifica se o usuário está logado
  get isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }

  // Obtém o usuário atual
  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  // Obtém o display name do usuário
  get userDisplayName(): string | null {
    return this.auth.currentUser?.displayName || null;
  }

  // Obtém o email do usuário
  get userEmail(): string | null {
    return this.auth.currentUser?.email || null;
  }

  // Obtém a foto do usuário
  get userPhotoURL(): string | null {
    return this.auth.currentUser?.photoURL || null;
  }
}