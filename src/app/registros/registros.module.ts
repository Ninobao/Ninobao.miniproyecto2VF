import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosService } from './registros.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    RegistrosService
  ]
})
export class RegistrosModule { }
