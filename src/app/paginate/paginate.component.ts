import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {

  @Output() setPaginate: EventEmitter<{ start: number; end: number }> = new EventEmitter();

  pages: number[] = []; // numéro des pages
  perPage: number = 2; // fixer le nombre d'albums par page
  total: number = 0;
  numberPages: number = 0;
  currentPage: number;

  constructor(private aS : AlbumService) { }

  ngOnInit() {

    // current page si plusieurs paginations dans la page 
    // il faut souscrire à un Observable pour écouter les changements
    this.aS.sendCurrentNumberPage.subscribe(numberPage => this.currentPage = numberPage);
    this.setParameters(this.aS.count()); // passer le nombre d'albums au setter configuration pagination

    for (let i = 1; i < this.numberPages + 1; i++) {
      this.pages.push(i);
    }
  }

  /**
   * setParameters : définir les paramètres de la pagination
   * 
   * @param num 
   */
  setParameters(num: number): void {
    this.total = num;
    this.numberPages = Math.ceil(this.total / this.perPage);
    this.currentPage = 1;
  }

  selectedPage(page: number) {
    this.currentPage = page;
    this.setPaginate.emit(this.paginate(page));
    this.aS.currentPage(this.currentPage); // mettre à jour les autres components paginate
  }

  next() {
    if (this.currentPage >= this.numberPages) {
      this.currentPage = 1;
    } else {
      this.currentPage++;
    }
    this.aS.currentPage(this.currentPage); // mettre à jour les autres components paginate
    this.setPaginate.emit(this.paginate(this.currentPage)); // émettre la page courante
  }

  previous() {
    if (this.currentPage == 1) {
      this.currentPage = this.numberPages;
    } else {
      this.currentPage--;
    }
    this.aS.currentPage(this.currentPage);
    this.setPaginate.emit(this.paginate(this.currentPage));
  }

  paginate(page: number): { start: number, end: number } {
    let start = (page - 1) * this.perPage;
    let end = start + this.perPage;

    return { start: start, end: end };
  }
}
