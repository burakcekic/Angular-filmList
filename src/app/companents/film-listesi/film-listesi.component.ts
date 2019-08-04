import { Component, OnInit } from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';
import {consoleTestResultHandler} from 'tslint/lib/test';
import {FilmDetayComponent} from '../film-detay/film-detay.component';


@Component({
  selector: 'app-film-listesi',
  templateUrl: './film-listesi.component.html',
  styleUrls: ['./film-listesi.component.scss']
})
export class FilmListesiComponent implements OnInit {

  constructor( private filmService: FilmServiceService) { }
  Search;
  filmDetay: FilmDetayComponent;
  ngOnInit() {
    this.getAllFilmist();
  }
  getId(id) {
    console.log(id);
    this.filmDetay = new FilmDetayComponent(this.filmService);
    this.filmDetay.getfilmDetay(id);
  }

  getAllFilmist(filmId?: string ) {
    this.filmService.getFilmList()._subscribe(data => {
      this.Search = data.body.Search;
      console.log(data.body.Search);
    });
  }
}
