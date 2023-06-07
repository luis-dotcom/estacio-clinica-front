import { Component, OnInit } from '@angular/core';
import { Especialidade } from '../../../models/especialidade.modelo';
import { EspecialidadeService } from '../../../services/especialidade.service';
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
        this.router.navigate(["/home"]);
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
      this.router.navigate(["/home"]);
    });
  }

}
