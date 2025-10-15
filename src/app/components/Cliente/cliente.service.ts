import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = "http://localhost:8080/clientes";
  private enderecoUrl = "http://localhost:8080/enderecos";
  private contatoUrl = "http://localhost:8080/contatos";

  private clientesSubject = new BehaviorSubject<Cliente[]>([]);
  clientes$ = this.clientesSubject.asObservable();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

  
  loadClientes(): void {
    this.read().subscribe(clientes => this.clientesSubject.next(clientes));
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      tap(() => this.loadClientes())
    );
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  readById(cliId: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${cliId}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.baseUrl}/${cliente.cliId}`, cliente).pipe(
      tap(() => this.loadClientes())
    );
  }

  delete(cliId: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.baseUrl}/${cliId}`).pipe(
      tap(() => this.loadClientes())
    );
  }

  // Endereço
  deleteEndereco(id: number) {
    return this.http.delete(`${this.enderecoUrl}/${id}`);
  }

  // Contato
  deleteContato(id: number) {
    return this.http.delete(`${this.contatoUrl}/${id}`);
  }
}
