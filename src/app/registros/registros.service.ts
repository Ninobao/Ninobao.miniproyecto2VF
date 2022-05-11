import { Injectable } from '@angular/core';
import { Registro } from './registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  private registros: Registro[];

  constructor() {
    this.registros=JSON.parse( localStorage.getItem("data") || '[]');
  }

  getRegistros() {
    return this.registros;
  }

  agregarRegistro(registro: Registro) {
    this.registros.push(registro);
    localStorage.setItem('data', JSON.stringify(this.registros));
  }

  nuevoRegistro(): Registro {
    return {
      nombre: '',
      sexo: '',
      correo: '',
      fecnac: ''
    };
  }
}
