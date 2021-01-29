import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTagComponent } from './components/create-tag/create-tag.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
  },
  {
    path: 'createTag', component: CreateTagComponent,
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
