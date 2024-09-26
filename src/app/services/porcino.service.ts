import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Porcino } from '../interfaces/porcino';
import { PorcinoSumary } from '../interfaces/porcinoSumary';

@Injectable({
  providedIn: 'root'
})
export class PorcinoService {
  constructor(private http: HttpClient) { }

  getPorcinoList(): Observable<Porcino[]> {
    return this.http.get<Porcino[]>(`http://localhost:9090/granja/api/porcino`);
  }
  getPorcinoSumaryList(): Observable<PorcinoSumary[]> {
    return this.http.get<PorcinoSumary[]>(`http://localhost:9090/granja/api/porcino/informe`);
  }

  savePorcino(newPorcino: Porcino) {
    const params = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`http://localhost:9090/granja/api/porcino`, newPorcino, { headers: params });
  }

  getPorcino(id: number | null): Observable<Porcino> {
    return this.http.get<Porcino>(`http://localhost:9090/granja/api/porcino/${id}`)
  }

  editPorcino(editPorcino: Porcino) {
    const params = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(`http://localhost:9090/granja/api/porcino`, editPorcino, { headers: params });
  }

  deletePorcino(id: number | null) {
    return this.http.delete(`http://localhost:9090/granja/api/porcino/${id}`)
  }
}
