import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

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
    CardModule,
    ChipModule,
    ConfirmDialogModule,
    ToastModule,
    SidebarModule
  ],
 
})
export class PrimeNGModule { }
