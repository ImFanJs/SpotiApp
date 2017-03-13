import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist:any[] = [];
  tracks:any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService:SpotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(parametros => parametros['id'])
      .subscribe( id => {
        this.spotifyService.getArtist(id)
          .subscribe( data => {
            this.artist = data;
            // console.log(this.artist);
          });

        this.spotifyService.getTopTracks(id)
          .subscribe( tracks => {
            this.tracks = tracks;
            // console.log(this.tracks);
          });
      });
  }

}
