import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/clientes";

  // BehaviorSubject que armazena a lista atual de clientes e emite atualizações
  private clientesSubject = new BehaviorSubject<Cliente[]>([]);
  clientes$ = this.clientesSubject.asObservable();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  // Carrega a lista do backend e emite para os inscritos
  loadClientes(): void {
    this.read().subscribe(clientes => {
      this.clientesSubject.next(clientes);
    });
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      tap(() => this.loadClientes()) // Atualiza lista após criação
    );
  }

  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  readById(cliId: string): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliId}`;
    return this.http.get<Cliente>(url);
  }
 
  update(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliente.cliId}`;
    return this.http.put<Cliente>(url, cliente).pipe(
      tap(() => this.loadClientes()) // Atualiza lista após edição
    );
  }
 
  delete(cliId: number): Observable<Cliente>{    
    const url = `${this.baseUrl}/${cliId}`;
    return this.http.delete<Cliente>(url).pipe(
      tap(() => this.loadClientes()) // Atualiza lista após exclusão
    );
  }

  // Novo método para contar clientes
  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }
}
