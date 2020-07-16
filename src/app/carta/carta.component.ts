import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  entrantes : any[];
  carnes : any[];
  pescados : any[];
  veggies : any[];
  postres : any[];

  constructor(private datosService : DatosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.datosService.getEntrantes().subscribe((response) => {
      this.entrantes = response;
    });
    this.datosService.getCarnes().subscribe((response) => {
      this.carnes = response;
    });
    this.datosService.getPescados().subscribe((response) => {
      this.pescados = response;
    });
    this.datosService.getVeggie().subscribe((response) => {
      this.veggies = response;
      console.log(response);
    });
    this.datosService.getPostres().subscribe((response) => {
      this.postres = response;
    });
  }

}
