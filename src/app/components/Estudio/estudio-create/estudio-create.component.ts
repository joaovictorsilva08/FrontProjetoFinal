import { Component, OnInit } from '@angular/core';
import { Estudio } from '../estudio.model';
import { EstudioService } from '../estudio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudio-create',
  templateUrl: './estudio-create.component.html',
  styleUrls: ['./estudio-create.component.css']
})
export class EstudioCreateComponent implements OnInit {

  
  estudio: Estudio = {
    estNome: '',
    estCnpj: '',
    estAtivo: false
  }

  //importando productService
  constructor(private estudioService: EstudioService,
    private router: Router) { }
  
  ngOnInit(): void {    
  }

  createProduct(): void {
    this.estudioService.create(this.estudio).subscribe(() => {
      this.estudioService.showMessage('Estudio criado!')
      this.router.navigate(['/estudio'])
    })
  }

  cancel(): void {
    this.router.navigate(['/estudio'])
  }  
}
