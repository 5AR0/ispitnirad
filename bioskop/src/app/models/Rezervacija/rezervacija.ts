import { Film } from "../Film/film";

export class Rezervacija {
    film: Film;
    status: 'rezervisano' | 'gledano' | 'otkazano';
    ocena?: number;
    projekcija: string;
}
