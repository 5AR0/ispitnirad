import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/Film/film';
import { FilmService } from '../../services/Film/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KorisnikService } from '../../services/Korisnik/korisnik.service';
import { Korisnik } from '../../models/Korisnik/korisnik';
import { Rezervacija } from '../../models/Rezervacija/rezervacija';

@Component({
  selector: 'app-film-detalji',
  templateUrl: './film-detalji.component.html',
  styleUrl: './film-detalji.component.css'
})
export class FilmDetaljiComponent implements OnInit{
  film:Film;
  id: string;
  korisnikId: string;
  showDialog=false;
  rezervacijaForm: FormGroup;
  korisnik: Korisnik=new Korisnik();
  rezervacija: Rezervacija=new Rezervacija();
  korpa: Rezervacija[]= [];
  constructor(private filmService:FilmService,private route: ActivatedRoute,private datePipe: DatePipe, private router: Router,
    private fb: FormBuilder, private snackBar: MatSnackBar, private korisnikService: KorisnikService
  ){
    
  }
  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   this.filmService.getFilmById(Number(this.id)).subscribe({
    next: (res: any)=>{
    this.film=res;
    }
   })
   this.korisnikId=sessionStorage.getItem("korisnikId") as string;
   this.rezervacijaForm = this.fb.group({
    projekcija: ['', Validators.required]
  });
  }
  formatDate(date: string): string {
    const validDate = new Date(date);
    return validDate.toString() !== 'Invalid Date' 
      ? this.datePipe.transform(date, 'medium') as string 
      : 'Invalid Date';
  }

  rezervisi(filmId: number){
   if (this.korisnikId){
    this.rezervacija.film=this.film;
    this.korisnikService.getKorisnikById(Number(this.korisnikId)).subscribe({
      next: (res: any)=> {
        this.korisnik=res;
      }
    })
   this.showDialog=true;
   } else {
    this.router.navigate(['/login']);
   }
  }

  closeDialog(){
    this.showDialog=false;
  }
  createRezervacija(){
    this.rezervacija.status='rezervisano';
    this.rezervacija.projekcija=this.rezervacijaForm.value.projekcija;
    const rezervacije = sessionStorage.getItem("korpa");
    if(rezervacije){
      this.korpa=JSON.parse(rezervacije);
    } 
    this.korpa.push(this.rezervacija);
    this.snackBar.open('Upesno Ste Kreirali Rezervaciju.', 'Zatvori', {
      duration: 2500
    });
    this.showDialog=false;
    console.log(this.korpa);
    sessionStorage.setItem("korpa",JSON.stringify(this.korpa));
  }
}
