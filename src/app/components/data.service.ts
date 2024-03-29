import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly dados = [
    ["Janeiro", 33],
    ["Fevereiro", 68],
    ["Março", 49],
    ["Abril", 15],
    ["Maio", 80],
    ["Junho", 27]
  ];

  getData(): Observable<any> {
    return new Observable((observable) => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
