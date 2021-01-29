import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AdminModule { }
