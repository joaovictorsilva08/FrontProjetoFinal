import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Estudio } from './estudio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

 baseUrl = "http://localhost:8080/estudios";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(estudio: Estudio): Observable<Estudio>{
    return this.http.post<Estudio>(this.baseUrl, estudio)
  }

  read(): Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.baseUrl)
  }

  readById(estId: string): Observable<Estudio>{
    const url = `${this.baseUrl}/${estId}`
    return this.http.get<Estudio>(url)
  }
 
  update(estudio: Estudio): Observable<Estudio>{
    const url = `${this.baseUrl}/${estudio.estId}`
    return this.http.put<Estudio>(url, estudio)
  }
 
  delete(estId: number): Observable<Estudio>{    
    const url = `${this.baseUrl}/${estId}`
    return this.http.delete<Estudio>(url)
  }
}
