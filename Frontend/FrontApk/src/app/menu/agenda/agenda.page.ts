import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  fechaNow: string;

  constructor() { }

  ngOnInit() {
    const now = new Date(); // Obtiene la fecha y hora actuales

    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ]; // Crea una matriz de nombres de mes

    const formattedDate = now.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }); // Formatea la fecha y hora actuales en el formato de fecha y hora local con el mes con el nombre correspondiente

    this.fechaNow = formattedDate // Muestra la fecha y hora actuales en formato "DD de mes de AAAA" en la consola

  }



}
