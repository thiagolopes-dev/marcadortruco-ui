import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
 
  exports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    DividerModule,
    CardModule
  ],
 
})
export class PrimeNGModule { }
