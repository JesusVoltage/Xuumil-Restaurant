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

  desayunos1 :any[];
  desayunos2 :any[];
  desayunos3 :any[];
  desayunos4 :any[];
  desayunos5 :any[];
  desayunos6 :any[];
  desayunos7 :any[];


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

    this.datosService.getDesayuno1().subscribe((response) => {
      this.desayunos1 = response;
    });
    this.datosService.getDesayuno2().subscribe((response) => {
      this.desayunos2 = response;
    });
    this.datosService.getDesayuno3().subscribe((response) => {
      this.desayunos3 = response;
    });
    this.datosService.getDesayuno4().subscribe((response) => {
      this.desayunos4 = response;
    });
    this.datosService.getDesayuno5().subscribe((response) => {
      this.desayunos5 = response;
    });
    this.datosService.getDesayuno6().subscribe((response) => {
      this.desayunos6 = response;
    });
    this.datosService.getDesayuno7().subscribe((response) => {
      this.desayunos7 = response;
    });

  }

}
