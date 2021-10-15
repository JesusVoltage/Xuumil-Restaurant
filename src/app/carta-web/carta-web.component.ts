import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-carta-web',
  templateUrl: './carta-web.component.html',
  styleUrls: ['./carta-web.component.scss']
})
export class CartaWebComponent implements OnInit {

  paraEmpezar: any;
  paraTi: any;
  brasas: any;
  postre: any;
  constructor(private datosService : DatosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.paraEmpezar = this.datosService.getParaEmpezar();
    this.paraTi = this.datosService.getParaTi();
    this.brasas = this.datosService.getBrasas();
    this.postre = this.datosService.getPostre();
    

    
    
    
  }
}
