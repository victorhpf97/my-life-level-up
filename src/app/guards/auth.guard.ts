import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

// Wait for Firebase auth to resolve the current user using onAuthStateChanged.
// This avoids a race where the observable may emit null before persisted auth is restored,
// which would incorrectly block navigation when the user is actually signed in.
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth);

  return new Promise<boolean>((resolve) => {
    const unsub = auth.onAuthStateChanged(user => {
      if (user) {
        resolve(true);
      } else {
        router.navigate(['/login']);
        resolve(false);
      }
      // unsubscribe once we have a value
      try { unsub(); } catch (e) { /* ignore */ }
    }, () => {
      // on error, block navigation
      router.navigate(['/login']);
      resolve(false);
      try { unsub(); } catch (e) { /* ignore */ }
    });
  });
};