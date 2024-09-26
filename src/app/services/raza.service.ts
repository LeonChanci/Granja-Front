import { Injectable } from "@angular/core";
import { Raza } from "../interfaces/raza";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RazaService {
    constructor(private http: HttpClient) {}
    getRazaList(): Observable<Raza[]> {
      return this.http.get<Raza[]>(`http://localhost:9090/granja/api/raza`)
    }
}
  