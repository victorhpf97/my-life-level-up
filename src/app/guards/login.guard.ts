import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    map(user => {
      if (user) {
        // Se o usuário já está logado, redireciona para o dashboard
        router.navigate(['/dashboard']);
        return false;
      } else {
        // Se não está logado, permite acesso à página de login
        return true;
      }
    })
  );
};