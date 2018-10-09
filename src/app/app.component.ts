import { Component } from '@angular/core';
import { GuardService } from './guard.service';

import { Observable, interval } from 'rxjs';
import { map }  from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-music';
  count : Observable<string>;
  time : string;

  constructor(public guard: GuardService) {

    this.count = interval(1000).pipe(
      map(number => {
        let hours = Math.floor(number/3600);
        let min = Math.floor(number/60);

        return `${hours}h ${min - hours*60}min ${number - min*60}sec`;
      })
    );

    this.count.subscribe(t => this.time = t);
    }

}