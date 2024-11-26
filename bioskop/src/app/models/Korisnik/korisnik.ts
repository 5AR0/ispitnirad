import { Rezervacija } from "../Rezervacija/rezervacija";

export class Korisnik {
    id: number;
    ime: string;
    prezime: string;
    email: string;
    telefon: string;
    adresa: string;
    omiljeni: string[];
    rezervacije: Rezervacija[];
    lozinka: string;

}
