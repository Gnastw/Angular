import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'; // template-driven
import { AlbumService } from '../album.service';
import { Album } from '../album';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter(); // émission des données vers le parent

  constructor(private ablumService: AlbumService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm):void {
    // console.log(form.value['word']); // récupérer un input ngModel
    // console.log(this.ablumService.search(form.value['word']));
    let results = this.ablumService.search(form.value['word']);

    if (results.length > 0) this.searchAlbums.emit(results);
  }

}