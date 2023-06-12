import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidade } from 'src/app/components/models/especialidade.modelo';
import { EspecialidadeService } from 'src/app/components/services/especialidade.service';

@Component({
  selector: 'app-especialidad-delete',
  templateUrl: './especialidad-delete.component.html',
  styleUrls: ['./especialidad-delete.component.css']
})
export class EspecialidadDeleteComponent implements OnInit {

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
      this.service.mensagem("Especialidade apagada com Sucesso!");
      this.router.navigate(["/especialidade"]);
    });
  }
}
