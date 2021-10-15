import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkingComponent } from './working/working.component';
import { HomeComponent } from './home/home.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { CartaWebComponent } from './carta-web/carta-web.component';
import { DeliveryComponent } from './delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkingComponent,
    HomeComponent,
    BebidasComponent,
    CartaWebComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
