import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/Film/film';
import { FilmService } from '../../services/Film/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  filmovi: Film[]=[];
  kriterijumi={
    naziv: '', opis: '', zanr: '',trajanje: null as number | null,
    reziser: '', glumci: '',
    datumIzlaska: null as Date | null, datumiVremeProjekcije: {start: null,end: null},
    cena:  null as number | null,ocena : null as number | null
     }
    electedDateTime: Date;
    selectedTime: string;
  constructor(private filmService: FilmService,private router:Router){}
  ngOnInit(): void {
    this.filmovi=this.filmService.getFilmovi();
  }

  pretragaFilmova() {
    this.filmService.pretragaFilmova(this.kriterijumi).subscribe({
      next: (res: Film[])=>{
        this.filmovi=res;
      }
    })
  }

  filmDetalji(id: number){
  this.router.navigate(['/film-detalji',id]);
  }

  

}
