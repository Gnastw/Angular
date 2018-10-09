import { Injectable } from '@angular/core';
import { User } from "./user";
import { MockUsers } from "./mock-users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = MockUsers;
  private _isAuth: string = ''; // on mettra le nom de la personne connectée

  constructor() { }

  auth(email: string, password: string): boolean {
    let user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this._isAuth = user.name; // memoire le nom de la personne authentifiée

      return true;
    }

    return false;
  }

  // retourner le nom de l'utilisateur connecté
  get isAuth(): string { return this._isAuth; }
  // assigner une valeur à la variable privé
  set isAuth(isAuth: string) { this._isAuth = isAuth; }

}