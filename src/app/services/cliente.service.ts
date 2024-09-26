import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  getClienteList(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`http://localhost:9090/granja/api/cliente`)
  }

  saveCliente(newClient: Cliente) {
    const params = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`http://localhost:9090/granja/api/cliente`, newClient, { headers: params });
  }

  getCliente(id: string | null): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:9090/granja/api/cliente/${id}`)
  }

  editCliente(editClient: Cliente) {
    const params = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(`http://localhost:9090/granja/api/cliente`, editClient, { headers: params });
  }

  deleteCliente(id: string | null) {
    return this.http.delete(`http://localhost:9090/granja/api/cliente/${id}`)
  }
}
