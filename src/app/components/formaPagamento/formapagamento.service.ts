import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormaPagamento } from './formapagamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormapagamentoService {

  readonly baseUrl = "http://localhost:8080/formapagamentos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(formapagamento: FormaPagamento): Observable<FormaPagamento> {
    return this.http.post<FormaPagamento>(this.baseUrl, formapagamento);
  }

  read(): Observable<FormaPagamento[]> {
    return this.http.get<FormaPagamento[]>(this.baseUrl);
  }

  readById(formId: string): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${formId}`;
    return this.http.get<FormaPagamento>(url);
  }

  update(formapagamento: FormaPagamento): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${formapagamento.formId}`;
    return this.http.put<FormaPagamento>(url, formapagamento);
  }

  delete(formId: number): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${formId}`;
    return this.http.delete<FormaPagamento>(url);
  }
}
