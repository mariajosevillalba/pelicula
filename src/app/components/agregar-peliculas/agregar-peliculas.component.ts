import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaModule } from 'src/app/models/pelicula/pelicula.module';

@Component({
  selector: 'app-agregar-peliculas',
  templateUrl: './agregar-peliculas.component.html',
  styleUrls: ['./agregar-peliculas.component.css']
})
export class AgregarPeliculasComponent implements OnInit {
  peliculaForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router) {
    this.peliculaForm=this.fb.group(
      {
        nombre:['',Validators.required],
        categoria:['',Validators.required],
        director:['',Validators.required],
        anioEstreno:['',Validators.required],
        duracion:['',Validators.required],
        presupuesto:['',Validators.required]
      }
    )
   }

  ngOnInit(): void {
  }

  agregarPelicula()
  {
    const PELICULA: PeliculaModule={
    nombre:this.peliculaForm.get('nombre')?.value,
    categoria:this.peliculaForm.get('categoria')?.value,
    director:this.peliculaForm.get('director')?.value,
    anioEstreno:this.peliculaForm.get('anioEstreno')?.value,
    duracion:this.peliculaForm.get('duracion')?.value,
    presupuesto:this.peliculaForm.get('presupuesto')?.value
    }
    console.log(PELICULA);
    this.router.navigate(['/peliculas']);
  }

}
