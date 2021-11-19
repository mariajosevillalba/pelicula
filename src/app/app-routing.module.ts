import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPeliculasComponent } from './components/agregar-peliculas/agregar-peliculas.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  {
    path:'peliculas', component:PeliculasComponent
  },
  {
    path:'agregar-pelicula',component:AgregarPeliculasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
