import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Especialidade } from 'src/app/components/models/especialidade.modelo';
import { EspecialidadeService } from 'src/app/components/services/especialidade.service';

@Component({
  selector: 'app-professor-especialidade-delete',
  templateUrl: './professor-especialidade-delete.component.html',
  styleUrls: ['./professor-especialidade-delete.component.css']
})
export class ProfessorEspecialidadeDeleteComponent implements OnInit{

  especialidade: Especialidade = {
    valor: "",
    verValor: ""
  };

  constructor(private service: EspecialidadeService, private router: Router,  private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.especialidade.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.especialidade.id!).subscribe((resposta) => {
      this.especialidade = resposta;
    })
  }

  public deletarEspecialidade(): void {
    this.service.deleteEspecialidadeService(this.especialidade.id!).subscribe((reposta) => {
      this.service.mensagem("Especialidade Deletada com Sucesso!");
      this.router.navigate(["professor/especialidade"]);
    });
  }
}
