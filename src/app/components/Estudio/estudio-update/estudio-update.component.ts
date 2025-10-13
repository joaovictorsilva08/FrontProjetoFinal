import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from '../estudio.model'; // Ajuste o caminho conforme seu projeto
import { EstudioService } from '../estudio.service'; // Ajuste o caminho conforme seu projeto

@Component({
  selector: 'app-estudio-update',
  templateUrl: './estudio-update.component.html',
  styleUrls: ['./estudio-update.component.css']
})
export class EstudioUpdateComponent implements OnInit {

  estudio!: Estudio;

  constructor(
    private estudioService: EstudioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const estId = this.route.snapshot.paramMap.get('estId');
    if (estId) {
      this.estudioService.readById(estId).subscribe((est: Estudio) => {
        this.estudio = est;
      });
    } else {
      this.estudio = {} as Estudio; // novo registro
    }
  }

  salvarEstudio(): void {
    if (this.estudio.estId) {
      this.estudioService.update(this.estudio).subscribe(() => {
        this.estudioService.showMessage('Estúdio atualizado com sucesso!');
        this.router.navigate(['/estudios']); // Ajuste a rota conforme seu projeto
      });
    } else {
      this.estudioService.create(this.estudio).subscribe(() => {
        this.estudioService.showMessage('Estúdio criado com sucesso!');
        this.router.navigate(['/estudios']); // Ajuste a rota conforme seu projeto
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/estudios']); // Ajuste a rota conforme seu projeto
  }
}
