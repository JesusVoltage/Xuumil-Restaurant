import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { 
  paraEmpezar,
  paraTi,
  brasas,
  postre,
  vinoPostre, 
  vinoJerez, 
  vinoCadizTintos, 
  vinoCadizBlancos,
  carnes, 
  pescados, 
  veggie, 
  postres, 
  vinos1, 
  vinos2, 
  vinos3, 
  refrescos, 
  beer, 
  desayunos1,
  desayunos2,
  desayunos3,
  desayunos4,
  desayunos5,
  desayunos6,
  desayunos7,

} from '../assets/json/carta';

import {  
  delivery1,
  delivery2,
  delivery3,
  delivery4,
  delivery5,
  delivery6,
} from '../assets/json/delibery';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  getParaEmpezar(){
    return paraEmpezar;
  }
  getParaTi(){
    return paraTi;
  }
  getBrasas(){
    return brasas;
  };

  getPostre(){
    return postre;
  };

  getCarnes(): Observable <any> {
    return of(carnes);
  }

  getPescados(): Observable <any> {
    return of(pescados);
  }

  getVeggie(): Observable <any> {
    return of(veggie);
  }

  getPostres(): Observable <any> {
    return of(postres);
  }

  getVinos1(): Observable <any> {
    return of(vinos1);
  }

  getVinos2(): Observable <any> {
    return of(vinos2);
  }

  getVinos3(): Observable <any> {
    return of(vinos3);
  }

  getRefrescos(): Observable <any> {
    return of(refrescos);
  }

  getBeer(): Observable <any> {
    return of(beer);
  }

  getTintos(): Observable <any> {
    return of(vinoCadizTintos);
  }

  getBlancos(): Observable <any> {
    return of(vinoCadizBlancos);
  }

  getJerez(): Observable <any> {
    return of(vinoJerez);
  }
  
  getvinoPostre(): Observable <any> {
    return of(vinoPostre);
  }

  getDesayuno1(): Observable <any> {
    return of(desayunos1);
  }

  getDesayuno2(): Observable <any> {
    return of(desayunos2);
  }

  getDesayuno3(): Observable <any> {
    return of(desayunos3);
  }

  getDesayuno4(): Observable <any> {
    return of(desayunos4);
  }

  getDesayuno5(): Observable <any> {
    return of(desayunos5);
  }

  getDesayuno6(): Observable <any> {
    return of(desayunos6);
  }
  
  getDesayuno7(): Observable <any> {
    return of(desayunos7);
  }

  getDelivery1(){
    return of(delivery1);
  }
  getDelivery2(){
    return of(delivery2);
  }
  getDelivery3(){
    return of(delivery3);
  }
  getDelivery4(){
    return of(delivery4);
  }
  getDelivery5(){
    return of(delivery5);
  }
  getDelivery6(){
    return of(delivery6);
  }
}
