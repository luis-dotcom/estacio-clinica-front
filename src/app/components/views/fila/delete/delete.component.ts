import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fila } from '../fila.modelo';
import { FilaService } from '../fila.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

fila: Fila = {
    nome: "",
    sala: ""
  };

  constructor(
    private service: FilaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fila.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.fila.id!).subscribe((resposta) => {
      this.fila = resposta;
    });
  }

  public deletarDaFila(): void {
    this.service.deleteFilaService(this.fila.id!).subscribe((reposta) => {
      this.router.navigate(["fila"]);
      this.service.mensagem("Paciente em Atendimento!");
    });
  }

  public navegarParaListaDaFila() {
    this.router.navigate(["fila"]);
  }
}
