import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkingComponent } from './working/working.component';
import { HomeComponent } from './home/home.component';
import { CartaWebComponent } from './carta-web/carta-web.component';
import { DeliveryComponent } from './delivery/delivery.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carta', component: CartaWebComponent },
  { path: 'cartaWeb', component: CartaWebComponent },
  { path: 'delivery', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
