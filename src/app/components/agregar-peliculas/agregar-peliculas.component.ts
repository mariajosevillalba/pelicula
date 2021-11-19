import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-peliculas',
  templateUrl: './agregar-peliculas.component.html',
  styleUrls: ['./agregar-peliculas.component.css']
})
export class AgregarPeliculasComponent implements OnInit {
  peliculaForm: FormGroup;

  constructor(private fb:FormBuilder) {
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
    console.log(this.peliculaForm);
    console.log(this.peliculaForm.get('nombre')?.value);
    console.log(this.peliculaForm.get('categoria')?.value);
    console.log(this.peliculaForm.get('director')?.value);
    console.log(this.peliculaForm.get('anioEstreno')?.value);
    console.log(this.peliculaForm.get('duracion')?.value);
    console.log(this.peliculaForm.get('presupuesto')?.value);

  }

}
