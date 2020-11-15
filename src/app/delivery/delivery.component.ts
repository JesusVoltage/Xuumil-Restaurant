import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  delivery1: any[];
  delivery2: any[];
  delivery3: any[];
  delivery4: any[];
  delivery5: any[];
  delivery6: any[];

  constructor(private datosService : DatosService) { }
  
  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.datosService.getDelivery1().subscribe((response) => {
      this.delivery1 = response;
    });
    this.datosService.getDelivery2().subscribe((response) => {
      this.delivery2 = response;
    });
    this.datosService.getDelivery3().subscribe((response) => {
      this.delivery3 = response;
    });
    this.datosService.getDelivery4().subscribe((response) => {
      this.delivery4 = response;
    });
    this.datosService.getDelivery5().subscribe((response) => {
      this.delivery5 = response;
    });
    this.datosService.getDelivery6().subscribe((response) => {
      this.delivery6 = response;
    });
  };
}
