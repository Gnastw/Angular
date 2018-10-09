import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List, Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album: Album; // propriété [album] liée 

  albumLists: List[] = [];
  list: List;
  songs: Array<string> = [];// on utilisera ici un tableau de chansons
  
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  constructor(private ablumService: AlbumService) { }

  ngOnInit() { }

  // dès que quelque chose "rentre" dans le component enfant via une propriété Input
  // ou à l'initialisation du component (une fois)
  ngOnChanges() {
    // au chargement du component parent on n'a rien sélectionné pensez à vérifier que l'on a passé un album
    if (this.album) {
      this.list = this.ablumService.getAlbumList(this.album.ref); // récupération d'un objet List
      this.songs = this.list.list; // récupération de la liste des chansons.
    }
  }
  
  play(album: Album) {
    this.onPlay.emit(album);
  }

}
