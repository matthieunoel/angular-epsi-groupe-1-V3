import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatInputModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatInputModule
  ]
})
export class AdminModule { }
