import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name: string; // nom de l'utilisateur connecté
  message: string; // message dans les paramètres de la route

  constructor(private aS: AuthService, private route: ActivatedRoute) {
    this.name = `Hello ${this.aS.isAuth} `;

    // Vous devez souscrire à cette méthode car c'est un Observable
    // RxJS avec les Observables à revoir dans le prochain cours
    this.route.queryParamMap.subscribe(param => {
      this.message = param['params']
    });
  }

  ngOnInit() {
  }

}