import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Estudio } from './estudio.model';
import { Observable, tap, map } from 'rxjs'; // ✅ adiciona 'map'

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  baseUrl = "http://localhost:8080/estudios";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(estudio: Estudio): Observable<Estudio> {
    return this.http.post<Estudio>(this.baseUrl, estudio).pipe(
      tap(() => this.showMessage('Estúdio criado com sucesso!'))
    );
  }

  read(): Observable<Estudio[]> {
    return this.http.get<Estudio[]>(this.baseUrl);
  }

  readById(estId: number | string): Observable<Estudio> {
    const url = `${this.baseUrl}/${estId}`;
    return this.http.get<Estudio>(url);
  }

  update(estudio: Estudio): Observable<Estudio> {
    const url = `${this.baseUrl}/${estudio.estId}`;
    return this.http.put<Estudio>(url, estudio).pipe(
      tap(() => this.showMessage('Estúdio atualizado com sucesso!'))
    );
  }

  delete(estId: number | string): Observable<Estudio> {
    const url = `${this.baseUrl}/${estId}`;
    return this.http.delete<Estudio>(url).pipe(
      tap(() => this.showMessage('Estúdio deletado com sucesso!'))
    );
  }

  // ✅ NOVO MÉTODO ADICIONADO: contar estúdios
  count(): Observable<number> {
    return this.read().pipe(
      map(estudios => estudios.length)
    );
  }
}
