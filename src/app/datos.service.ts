import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { vinoPostre, vinoJerez, vinoCadizTintos, vinoCadizBlancos , entrantes, carnes, pescados, veggie, postres, vinos1, vinos2, vinos3, refrescos, beer} from '../assets/json/carta';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }



  getEntrantes(): Observable <any> {
    return of(entrantes);
  }

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
}
