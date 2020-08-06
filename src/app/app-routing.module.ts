import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkingComponent } from './working/working.component';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carta', component: CartaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
