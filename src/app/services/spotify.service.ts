import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlSearch:string = 'https://api.spotify.com/v1/search';

  constructor( private http:Http ) { }

  getArtists(termino) {
    let query:string = `?q=${ termino }&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get( url )
            .map( res => {
              return res.json().artists.items;
            });
  }

}
