import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(
    private http: HttpClient
  ) {}

  apiKey = 'f526fce5';
  filmList = 'http://www.omdbapi.com/?s=game&type=movie&page=1';
  filmDetay = 'http://www.omdbapi.com/?i=';
  link: string;

  getFilmList(): Observable<any> {
    this.link = this.filmList + '&apikey=' + this.apiKey;
    return this.http.get( this.link);
  }

  getFilmDetay(filmId: string= 'tt3896198') {
    this.link = this.filmDetay + filmId + '&apikey=' + this.apiKey;
    return this.http.get(this.link);
  }
}
