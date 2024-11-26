import { Film } from "../models/Film/film";
import { Korisnik } from "../models/Korisnik/korisnik";

export const MOCK_FILMOVI: Film[]=[

    {
        id: 1,
        naziv: "Gladiator",
        opis: "Gladijator (engl. Gladiator) američki je epski istorijsko dramski film u režiji Ridlija Skota iz 2000. godine.",
        slika: "Gladiatorteaser.jpg",
        zanr: "Akcija",
        trajanje: 120,
        reziser: "Ridlija Skota",
        glumci: ["Rasel Krou","Hoakin Finiks"],
        datumIzlaska: "2023-05-01",
        projekcije: ["2024-12-08 18:00","2024-12-08 21:00"],
        cena: 1000,
        recenzije: [
            {komentar: "odlican film", ocena: 4, korisnik: "Marko Markovic"},
            {komentar: "odlican film", ocena: 5, korisnik: "Petar Markovic"}
        ]
    },
    {
        id: 2,
        naziv: "Titanic",
        opis: "Titanic je američka epska romansa i film katastrofe iz 1997. godine kojeg je režirao i napisao James Cameron.",
        slika: "Titanic.jpg",
        zanr: "Drama",
        trajanje: 150,
        reziser: "Steven Spielberg",
        glumci: ["Leonardo DiCaprio","Kate Winslet"],
        datumIzlaska: "2023-01-01",
        projekcije: ["2024-12-08 18:00","2024-12-08 21:00"],
        cena: 1050,
        recenzije: [
            {komentar: "nije lose", ocena: 4, korisnik: "Marko Markovic"},
            {komentar: "odlican film", ocena: 5, korisnik: "Petar Markovic"}
        ] 
    },

    {
        id: 3,
        naziv: "Gospodar prstenova",
        opis: "Gospodar prstenova: Prstenova družina (eng. The Lord of the Rings: The Fellowship of the Ring) je fantastični pustolovni film Petera Jacksona iz 2001. i prvi iz trilogije Gospodar prstenova",
        slika: "lotr.jpg",
        zanr: "Akcija",
        trajanje: 200,
        reziser: "Petera Jacksona",
        glumci: ["Viggo Mortensen","Elija Woods"],
        datumIzlaska: "2022-01-01",
        projekcije: ["2024-12-08 18:00","2024-12-08 21:00"],
        cena: 1000,
        recenzije: [
            {komentar: "epski film", ocena: 4, korisnik: "Ivona Markovic"},
            {komentar: "odlican film", ocena: 5, korisnik: "Petar Markovic"}
        ]
    },

    {
        id: 4,
        naziv: "Matrix",
        opis: "Matriks (engl. The Matrix) naučnofantastični je akcioni film iz 1999. scenariste i reditelja Lane i Lili Vačauski.",
        slika: "matrix.jpeg",
        zanr: "Akcija",
        trajanje: 220,
        reziser: "Lili Vačauski",
        glumci: ["Kijanu Rivs","Lorens Fišbern"],
        datumIzlaska: "2020-01-01",
        projekcije: ["2024-12-08 18:00","2024-12-08 21:00"],
        cena: 1000,
        recenzije: [
            {komentar: "odlican film", ocena: 4, korisnik: "Ivana Markovic"},
            {komentar: "super film", ocena: 5, korisnik: "Petar Markovic"},
            {komentar: "moj najbolji film", ocena: 5, korisnik: "Petar Jovanovic"}
        ]
    },
    {
        id: 5,
        naziv: "Hari Poter i Kamen mudrosti",
        opis: "GHari Poter i Kamen mudrosti (engl. Harry Potter and the Philosopher's Stone) britansko-američki je fantastični film iz 2001. u režiji Krisa Kolambusa i produkciji Dejvida Hejmana",
        slika: "harry.jpg",
        zanr: "Akcija",
        trajanje: 120,
        reziser: "Dejvida Hejmana",
        glumci: ["Danijel Radklif"," Rupert Grint ","Ema Votson"],
        datumIzlaska: "2023-01-01",
        projekcije: ["2024-12-08 15:00","2024-12-08 22:00"],
        cena: 1000,
        recenzije: [
            {komentar: "odlican film", ocena: 4, korisnik: "Marko Markovic"},
            {komentar: "odlican film", ocena: 5, korisnik: "Petar Markovic"}
        ]
    },

    {
        id: 6,
        naziv: "Hobit: Neočekivano putovanje",
        opis: "Hobit: Neočekivano putovanje (eng. The Hobbit: An Unexpected Journey) je film fantastike iz 2012. godine kojeg je režirao Peter Jackson.",
        slika: "hobbit.jpeg",
        zanr: "Akcija",
        trajanje: 160,
        reziser: "Peter Jackson",
        glumci: ["Rasel Krou","Hoakin Finiks"],
        datumIzlaska: "2023-01-01",
        projekcije: ["2024-12-08 18:00","2024-12-08 21:00"],
        cena: 500,
        recenzije: [
            {komentar: "odlican film", ocena: 4, korisnik: "Marko Markovic"}
            
        ]
    },
    {
        id: 7,
        naziv: "Osvetnici",
        opis: "Osvetnici (engl. The Avengers) je američki film iz 2012. o timu superheroja baziran na Marvelovim stripovima istog naziva. Režiju filma potpisuje Džos Vidon",
        slika: "TheAvengers.jpg",
        zanr: "Akcija",
        trajanje: 160,
        reziser: "Džos Vidon",
        glumci: ["Robert Djunior","Hoakin Finiks"],
        datumIzlaska: "2023-01-01",
        projekcije: ["2025-12-08 18:00","2025-12-08 21:00"],
        cena: 200,
        recenzije: [
            {komentar: "odlican film", ocena: 4, korisnik: "Marko Markovic"}
            
        ]
    }





];



export const MOCK_KORISNICI: Korisnik[]=[
  {
    id: 1,
    ime: "Petar",
    prezime:"Petrovic",
    email: "petar@gmail.com",
    telefon: "066788900",
    adresa: "Njegoseva",
    omiljeni:["komedija","drama"],
    rezervacije: [],
    lozinka: "petar123"
  }  
];
