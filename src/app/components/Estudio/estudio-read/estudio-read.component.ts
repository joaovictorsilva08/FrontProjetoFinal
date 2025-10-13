import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudioService } from '../estudio.service';
import { Estudio } from '../estudio.model';

@Component({
  selector: 'app-estudio-read',
  templateUrl: './estudio-read.component.html',
  styleUrls: ['./estudio-read.component.css']
})
export class EstudioReadComponent implements OnInit {

  estudios: Estudio[] = [];

  displayedColumns: string[] = [
    'estNome',
    'estCnpj',
    'estEndereco',
    'estTelefone',
    'estEmail',
    'estAtivo',
    'actions'
  ];

  constructor(
    private estudioService: EstudioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estudioService.read().subscribe(estudios => {
      this.estudios = estudios;
    });
  }

  editarEstudio(id: number): void {
    this.router.navigate(['/estudios/update', id]);
  }

  deletarEstudio(id: number): void {
    if (confirm('Deseja realmente excluir este estúdio?')) {
      this.estudioService.delete(id).subscribe(() => {
        this.estudios = this.estudios.filter(est => est.estId !== id);
        this.estudioService.showMessage('Estúdio deletado com sucesso!');
      });
    }
  }
}
