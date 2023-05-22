import { Component, OnInit } from '@angular/core';
import { EspecialidadeService } from '../especialidade.service';
import { Especialidade } from '../especialidade.modelo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-delete',
  templateUrl: './especialidade-delete.component.html',
  styleUrls: ['./especialidade-delete.component.css']
})
export class EspecialidadeDeleteComponent implements OnInit {

  especialidade: Especialidade = {
    valor: "",
    verValor: ""
  };

  constructor(
    private service: EspecialidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.especialidade.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.especialidade.id!).subscribe((resposta) => {
      this.especialidade = resposta;
    });
  }

  public deletarEspecialidade(): void {
    this.service.deleteEspecialidadeService(this.especialidade.id!).subscribe((reposta) => {
      this.router.navigate(["especialidade"]);
      this.service.mensagem("Especialidade Deletada com Sucesso!");
    });
  }

  public navegarParaListaEspecialidade() {
    this.router.navigate(["especialidade"]);
  }
}
