import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fila } from '../fila.modelo';
import { FilaService } from '../fila.service';

@Component({
  selector: 'app-fila-read',
  templateUrl: './fila-read.component.html',
  styleUrls: ['./fila-read.component.css']
})
export class FilaReadComponent implements OnInit{

  displayedColumns: string[] = [
    "nome",
    "sala",
    "acoes"
  ];

  fila: Fila[] = [];
  qtdFila!: number;

  constructor(private service: FilaService, private router: Router) {}

  public ngOnInit(): void {
    this.listarFila();
    this.quantidadeFila();
  }

  public listarFila() {
    this.service.listarFilaService().subscribe((resposta) => {
      this.fila = resposta;
    });
  }

  public quantidadeFila() {
    this.service.quantidadeFila().subscribe((resposta) => {
      this.qtdFila = resposta;
    });
  }

  public navegarParaFilaCreate() {
    this.router.navigate(["fila/create"]);
  }

}
