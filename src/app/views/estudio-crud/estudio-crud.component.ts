import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudio-crud',
  templateUrl: './estudio-crud.component.html',
  styleUrls: ['./estudio-crud.component.css']
})
export class EstudioCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
      navigateToEstudioCreate(): void {
    this.router.navigate(['/festudio/create'])
  }

}
