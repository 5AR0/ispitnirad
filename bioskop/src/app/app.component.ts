import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { KorisnikService } from './services/Korisnik/korisnik.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'bioskop';
  korisnikId: string | null;
  private subscription: Subscription;
  constructor(private router: Router, private snackBar: MatSnackBar, private korisnikService: KorisnikService){

  }
  ngOnInit(): void {
    this.subscription = this.korisnikService.korisnik.subscribe(id => {
      this.korisnikId = id;
    });
    console.log(this.korisnikId);
  }
  odjavi(){
    this.snackBar.open('Uspesno ste se odjavili', 'Zatvori', {
      duration: 2500
    });
    sessionStorage.clear();
    this.korisnikId = null;
    this.router.navigate(["/home"]);
  }
}
