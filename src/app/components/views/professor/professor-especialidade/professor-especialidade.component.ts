import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidade } from 'src/app/components/models/especialidade.modelo';
import { EspecialidadeService } from 'src/app/components/services/especialidade.service';

@Component({
  selector: 'app-professor-especialidade',
  templateUrl: './professor-especialidade.component.html',
  styleUrls: ['./professor-especialidade.component.css']
})
export class ProfessorEspecialidadeComponent implements OnInit {

  displayedColumns: string[] = [
    "especialidade",
    "delete"
  ];

  especialidadeCreate: Especialidade = {
    valor: '',
    verValor: '',
  };

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

  public criarEspecialidade(): void {
    this.especialidadeCreate.verValor = this.especialidadeCreate.valor;
    this.service.criarEspecialidadeService(this.especialidadeCreate).subscribe(
      (resposta) => {
        this.service.mensagem('Especialidade adicionado com sucesso!');
        this.router.navigate(["/home/professor"]);
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campo Obrigatório!');
        }
      }
    );
  }
  public deletarEspecialidade(id: any): void {
    this.service.deleteEspecialidadeService(id).subscribe((reposta) => {
      this.service.mensagem("Especialidade Deletada com Sucesso!");
      this.router.navigate(["/home/professor"]);
    });
  }
}
