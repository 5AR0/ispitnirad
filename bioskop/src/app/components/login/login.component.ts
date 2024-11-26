import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KorisnikService } from '../../services/Korisnik/korisnik.service';
import { Korisnik } from '../../models/Korisnik/korisnik';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private korisnikService: KorisnikService, private router: Router, 
    private snackBar: MatSnackBar){

  }
  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      lozinka: ['',[Validators.required,Validators.minLength(3)]]
    })
  }

  onSubmit(){
    if (this.loginForm.valid){
    this.korisnikService.prijava(this.loginForm.value.email,this.loginForm.value.lozinka).subscribe({
      next: (res: Korisnik | undefined)=>{
        if(res) {
          this.snackBar.open('Uspesno ste se prijavili', 'Zatvori', {
            duration: 2500
          });  
          sessionStorage.setItem("korisnikId", res.id.toString());
          this.korisnikService.setKorisnikId(res.id.toString());
          this.router.navigate([history.back()]);
        } else { 
          this.snackBar.open('Dogodila se greska. Pokusajte ponovo!', 'Zatvori', {
            duration: 2500
          });  
        }
      }
    })  
    }
  }

}
