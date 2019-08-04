import {Component, OnInit} from '@angular/core';
import {FilmServiceService} from './services/film-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'filmListApp';
  constructor(private filmService: FilmServiceService) {}

  ngOnInit(): void {
  }
}
