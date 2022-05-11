import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../registros/registros.service';
import { Registro } from '../registros/registro.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registro: Registro={
    nombre: '',
    sexo: '',
    correo: '',
    fecnac: ''
  };
  constructor(private registrosService: RegistrosService) { }

  ngOnInit(): void {
    this.registro = this.registrosService.nuevoRegistro();
  }

  nuevoRegistro(): void {
    this.registrosService.agregarRegistro(this.registro);
    this.registro = this.registrosService.nuevoRegistro();
  }

}
