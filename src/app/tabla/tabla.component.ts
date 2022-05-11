import { Component, OnInit } from '@angular/core';
import { Registro } from '../registros/registro.model';
import { RegistrosService } from '../registros/registros.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private registrosService: RegistrosService) { }
  registros: Registro[]=[];
  ngOnInit(): void {
    this.registros = this.registrosService.getRegistros();
  }

}
