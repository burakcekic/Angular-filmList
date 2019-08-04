import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { AppComponent } from './app.component';
import { FilmListesiComponent } from './companents/film-listesi/film-listesi.component';
import { FilmDetayComponent } from './companents/film-detay/film-detay.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListesiComponent,
    FilmDetayComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, HttpClientModule, MatChipsModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
