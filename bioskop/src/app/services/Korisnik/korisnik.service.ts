import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Korisnik } from '../../models/Korisnik/korisnik';
import { MOCK_KORISNICI } from '../../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  private korisnikId = new BehaviorSubject<string | null>(null);
  get korisnik() {
    return this.korisnikId.asObservable();
  }

  setKorisnikId(korisnikId: string) {
    this.korisnikId.next(korisnikId);
  }
  constructor() { }

  prijava(email: string, lozinka: string): Observable<Korisnik| undefined>{
    const korisnik=MOCK_KORISNICI.find(korisnik => korisnik.email === email && korisnik.lozinka===lozinka);
    return of(korisnik);
  }

  getKorisnikById(id: number){
    const korisnik=MOCK_KORISNICI.find(korisnik => korisnik.id === id);
    return of(korisnik);
  }

}
