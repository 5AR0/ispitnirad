import { Component, OnInit } from '@angular/core';
import { Rezervacija } from '../../models/Rezervacija/rezervacija';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrl: './korpa.component.css'
})
export class KorpaComponent implements OnInit{
  korpa: Rezervacija[]=[];
  ngOnInit(): void {
    const rezervacije = sessionStorage.getItem("korpa");
    if(rezervacije){
      this.korpa=JSON.parse(rezervacije);
    } 
  }

}
