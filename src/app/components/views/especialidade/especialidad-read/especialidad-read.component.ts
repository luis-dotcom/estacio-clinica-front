import { Component, OnInit } from '@angular/core';
import { Especialidade } from '../especialidade.modelo';
import { EspecialidadeService } from '../especialidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidad-read',
  templateUrl: './especialidad-read.component.html',
  styleUrls: ['./especialidad-read.component.css']
})
export class EspecialidadReadComponent implements OnInit{

  displayedColumns: string[] = [
    "especialidade",
    "delete"
  ];

  especialidade: Especialidade[] = [];

  constructor(private service: EspecialidadeService, private router: Router) {}

  public ngOnInit(): void {
    this.listarEspecialidade();
  }

  public listarEspecialidade() {
    this.service.listarEspecialidadesService().subscribe((resposta) => {
      this.especialidade = resposta;
    });
  }

  public navegarParaEspecialidadeCreate() {
    this.router.navigate(["especialidade/create"]);
  }
}
