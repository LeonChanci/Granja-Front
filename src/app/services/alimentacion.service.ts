import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Alimentacion } from '../interfaces/alimentacion';

@Injectable({
    providedIn: 'root'
})
export class AlimentacionService {
    constructor(private http: HttpClient) {}
    getAlimentacionList(): Observable<Alimentacion[]> {
      return this.http.get<Alimentacion[]>(`http://localhost:9090/granja/api/alimentacion`)
    }
}