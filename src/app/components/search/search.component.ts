import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artists:any[] = [];
  termino:string = "";

  constructor( private spotifyService:SpotifyService ) { }

  ngOnInit() {
  }

  handleSearch() {
    this.spotifyService.getArtists(this.termino).subscribe( data => {
      this.artists = data;
    });
  }

}
