import { Injectable } from '@angular/core';
import { Film } from '../../models/Film/film';
import { MOCK_FILMOVI } from '../../data/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilmovi(): Film[]{
    return MOCK_FILMOVI;
  }

  getFilmById(id: number): Observable<Film | undefined>{
    const film=MOCK_FILMOVI.find(film => film.id === id);
    return of(film);
  }

  pretragaFilmova(kriterijumi: any ): Observable<Film[]>{
    let filtriraniFilmovi = MOCK_FILMOVI;
    if (kriterijumi.naziv){
      filtriraniFilmovi=filtriraniFilmovi.filter(film => film.naziv.toLowerCase().includes(kriterijumi.naziv.toLowerCase()));
    }
    if (kriterijumi.opis){
      filtriraniFilmovi=filtriraniFilmovi.filter(film => film.opis.toLowerCase().includes(kriterijumi.opis.toLowerCase()));
    }
    if (kriterijumi.zanr){
      filtriraniFilmovi=filtriraniFilmovi.filter(film => film.zanr.toLowerCase().includes(kriterijumi.zanr.toLowerCase()));
    }

    if (kriterijumi.trajanje!==null){
      filtriraniFilmovi=filtriraniFilmovi.filter(film => film.trajanje === kriterijumi.trajanje);
    }
    if (kriterijumi.reziser){
      filtriraniFilmovi=filtriraniFilmovi.filter(film => film.reziser.toLowerCase().includes(kriterijumi.reziser.toLowerCase()));
    }

    if (kriterijumi.glumci){
      filtriraniFilmovi=filtriraniFilmovi.filter(film => 
        film.glumci.some(glumac => glumac.toLowerCase().includes(kriterijumi.glumci.toLowerCase()))
      );
    }
    
    if (kriterijumi.datumIzlaska){
      
      filtriraniFilmovi=filtriraniFilmovi.filter(film => 
        new Date(film.datumIzlaska).toDateString()===kriterijumi.datumIzlaska.toDateString()
      );
    }
    console.log("*"+kriterijumi.datumiVremeProjekcije.start);
    if(kriterijumi.datumiVremeProjekcije.start && kriterijumi.datumiVremeProjekcije.end){
      filtriraniFilmovi=filtriraniFilmovi.filter(film=>
        film.projekcije.some(projekcija => {
          const vremeProjekcije=new Date(projekcija);
          console.log(vremeProjekcije);
          return vremeProjekcije >= new Date(kriterijumi.datumiVremeProjekcije.start) && vremeProjekcije <= new Date(kriterijumi.datumiVremeProjekcije.end);
        })
      
      )
    }   
    if (kriterijumi.cena!==null){
      filtriraniFilmovi=filtriraniFilmovi.filter(film => film.cena <= kriterijumi.cena);
    }

    if (kriterijumi.ocena!==null){
      filtriraniFilmovi=filtriraniFilmovi.filter(film => Math.ceil(this.getProsecnaOcena(film.recenzije)) == kriterijumi.ocena);
    }
    return of(filtriraniFilmovi);
  }

  getProsecnaOcena(recenzije: any[]): number {
    if(recenzije.length===0){
      return 0;
    }
    const ukupneOcene = recenzije.reduce((sum,recenzija)=>sum+recenzija.ocena,0);
    return ukupneOcene / recenzije.length;
  }
}
