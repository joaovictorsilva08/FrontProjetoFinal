import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, tap } from 'rxjs';
import { Produto } from './produto.module';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:8080/produtos";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto).pipe(
      tap(() => this.showMessage('Produto criado com sucesso!'))
    );
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  readById(proId: String): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${proId}`);
  }

  update(produto: Produto): Observable<Produto>{
    const url = `${this.baseUrl}/${produto.proId}`
    return this.http.put<Produto>(url, produto)
  }

  delete(proId: String): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${proId}`).pipe(
      tap(() => this.showMessage('Produto deletado com sucesso!'))
    );
  }

  // ✅ Método para contar produtos
  count(): Observable<number> {
    return this.read().pipe(
      map(produtos => produtos.length)
    );
  }
}
