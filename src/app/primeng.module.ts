import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
 
  exports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
 
})
export class PrimeNGModule { }
