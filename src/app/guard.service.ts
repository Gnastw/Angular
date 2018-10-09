import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  // on injecte par dépendance le service AuthService
  constructor(private aS: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    // vérifier en mémoire que la personne est bien authentifiée ~ memoriser son statut en gardant son nom
    if (this.aS.isAuth)
      return true;

    this.router.navigate(['/login'], { queryParams: { messageError: `Error authentification` } });

    return false;
  }

  // méthode pour se déloguer
  logout(): void {
    this.aS.isAuth = ''; // on remet la chaîne de caractères vide

    this.router.navigate(['/albums'], { queryParams: { message: `Success logout` } });
  }

  // savoir si on est 
  isLoggedIn() { return this.aS.isAuth.length > 0; }

}