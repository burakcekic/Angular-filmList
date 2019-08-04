import { Component, OnInit } from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';

@Component({
  selector: 'app-film-detay',
  templateUrl: './film-detay.component.html',
  styleUrls: ['./film-detay.component.scss']
})
export class FilmDetayComponent implements OnInit {

  constructor(private filmService: FilmServiceService) {

  }
  data;
  ngOnInit() {
    this.getfilmDetay();
  }

  getfilmDetay(filmId?: string) {
    this.filmService.getFilmDetay(filmId)._subscribe( res =>{
      this.data = res.body;
      console.log(res.body);
    });



  }

}
