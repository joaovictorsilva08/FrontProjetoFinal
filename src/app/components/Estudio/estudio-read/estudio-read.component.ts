import { Component, OnInit } from '@angular/core';
import { EstudioService } from '../estudio.service';
import { Estudio } from '../estudio.model';

@Component({
  selector: 'app-estudio-read',
  templateUrl: './estudio-read.component.html',
  styleUrls: ['./estudio-read.component.css']
})
export class EstudioReadComponent implements OnInit {

  estudios: Estudio[] = [];

  displayedColumns: string[] = [ 'estNome', 'estCnpj', 'estEndereco', 'estTelefone', 'estEmail', 'estAtivo', 'action' ];

  constructor(private estudioService: EstudioService) {}

  ngOnInit(): void {
    this.estudioService.read().subscribe(estudios => {
      this.estudios = estudios;
    });
  }
}
