import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { entrantes, carnes, pescados, veggie, postres } from '../assets/json/carta';

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
}
