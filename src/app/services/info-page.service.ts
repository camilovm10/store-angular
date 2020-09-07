import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: infoPagina = {};
  cargada = false;

  equipo: any[] = []

  constructor( private http: HttpClient ) {

    // console.log("servicio de info pagina listo");

    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: infoPagina) => {

      this.cargada = true;
      this.info = resp;
    });
   }



   private cargarEquipo() {
    // Leer el archivo JSON
    this.http.get('https://angular-html-fernando.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;

    });
   }


}
