import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl = 'http://localhost:8080/api/reservas'; // ajuste a URL se precisar

  constructor(private http: HttpClient) {}

  countAtivas(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count/ativas`);
  }
}
