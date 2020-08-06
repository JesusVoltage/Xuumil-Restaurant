import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  bebidas : boolean = false;

  entrantes : any[];
  carnes : any[];
  pescados : any[];
  veggies : any[];
  postres : any[];
  vinos1 : any[];
  vinos2 : any[];
  vinos3 : any[];
  refrescos : any[];
  beer : any[];
  cadizTintos : any[];
  cadizBlancos : any[];
  jerez : any[];
  vinoPostre : any[];
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
    });
    this.datosService.getPostres().subscribe((response) => {
      this.postres = response;
    });
    this.datosService.getVinos1().subscribe((response) => {
      this.vinos1 = response;
    });
    this.datosService.getVinos2().subscribe((response) => {
      this.vinos2 = response;
    });
    this.datosService.getRefrescos().subscribe((response) => {
      this.refrescos = response;
    });
    this.datosService.getBeer().subscribe((response) => {
      this.beer = response;
    });
    this.datosService.getVinos3().subscribe((response) => {
      this.vinos3 = response;
    });
    this.datosService.getTintos().subscribe((response) => {
      this.cadizTintos = response;
    });
    this.datosService.getBlancos().subscribe((response) => {
      this.cadizBlancos = response;
    });
    this.datosService.getJerez().subscribe((response) => {
      this.jerez = response;
    });
    this.datosService.getvinoPostre().subscribe((response) => {
      this.vinoPostre = response;
    });

  }

}
