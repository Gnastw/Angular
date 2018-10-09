import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  showplayer : boolean = true;

  current: number = 1;
  total: number ;
  ratio: number = 0;
  constructor(private aS : AlbumService) { }

  ngOnInit() {
    this.aS.subjectAlbum.subscribe(
      album => {
        //console.log(album);
        this.showplayer = true;

        let duration = album.duration;
        this.total = Math.floor(duration/120);
        this.ratio = Math.floor(100/this.total);

        console.log(this.total);
        console.log(this.ratio);

        const player = setInterval(() => {
          this.current++;
          this.ratio += this.ratio;
          if (this.ratio > 100){
            clearInterval(player);
            this.showplayer = false;
            this.aS.subjectAlbum.unsubscribe();
          }
          console.log(this.ratio)
        }, 120 * 1000)
      }

    )
  }

}
