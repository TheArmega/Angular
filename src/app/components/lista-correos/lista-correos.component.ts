import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos: any;

  constructor() {
    const correo1 = {
      leido: true,
      titulo: "Titulo del 1",
      cuerpo:  "Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, \
      Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, \
      Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email",
      emisor: "correoEmisor1@telefonica.com",
      destinatario: "correoDestino1@telefonica.com"
    }

    const correo2 = {
      leido: false,
      titulo: "Titulo del 2",
      cuerpo:  "Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, \
      Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, \
      Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email",
      emisor: "correoEmisor2@telefonica.com",
      destinatario: "correoDestino2@telefonica.com"
    }

    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
   }

  ngOnInit(): void {
  }

}
