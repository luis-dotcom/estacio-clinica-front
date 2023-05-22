import { Component, Input, OnInit } from '@angular/core';
import { Especialidade } from '../especialidade.modelo';
import { EspecialidadeService } from '../especialidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-create',
  templateUrl: './especialidade-create.component.html',
  styleUrls: ['./especialidade-create.component.css'],
})
export class EspecialidadeCreateComponent implements OnInit {
  especialidade: Especialidade = {
    valor: '',
    verValor: '',
  };

  constructor(private service: EspecialidadeService, private router: Router) {}

  ngOnInit(): void {}

  public criarEspecialidade(): void {
    this.especialidade.verValor = this.especialidade.valor;
    this.service.criarEspecialidadeService(this.especialidade).subscribe(
      (resposta) => {
        this.router.navigate(['especialidade']);
        this.service.mensagem('Especialidade adicionado com sucesso!');
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campo Obrigatório!');
        }
      }
    );
  }

  public navegarParaListaDeEspecialidade() {
    this.router.navigate(['especialidade']);
  }
}
