import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidade } from 'src/app/components/models/especialidade.modelo';
import { EspecialidadeService } from 'src/app/components/services/especialidade.service';

@Component({
  selector: 'app-professor-especialidade-create',
  templateUrl: './professor-especialidade-create.component.html',
  styleUrls: ['./professor-especialidade-create.component.css']
})
export class ProfessorEspecialidadeCreateComponent implements OnInit{

  especialidade: Especialidade = {
    valor: '',
    verValor: '',
  };

  constructor(private service: EspecialidadeService, private router: Router) {}

  public ngOnInit(): void {

  }

  public criarEspecialidade(): void {
    this.especialidade.verValor = this.especialidade.valor;
    this.service.criarEspecialidadeService(this.especialidade).subscribe(
      (resposta) => {
        this.service.mensagem('Especialidade adicionada com sucesso!');
        this.router.navigate(["/professor/especialidade"]);
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campo Obrigatório!');
        }
      }
    );
  }
}
