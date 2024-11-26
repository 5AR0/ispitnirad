import { Recenzija } from "../Recenzija/recenzija";

export class Film {
    id: number;
    naziv: string;
    opis: string;
    slika: string;
    zanr: string;
    trajanje: number;
    reziser: string;
    glumci: string[];
    datumIzlaska: string;
    projekcije: string[];
    cena: number;
    recenzije: Recenzija[];
}
