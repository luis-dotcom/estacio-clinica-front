import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidade } from 'src/app/components/models/especialidade.modelo';
import { EspecialidadeService } from 'src/app/components/services/especialidade.service';

@Component({
  selector: 'app-especialidad-create',
  templateUrl: './especialidad-create.component.html',
  styleUrls: ['./especialidad-create.component.css']
})
export class EspecialidadCreateComponent implements OnInit{

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
        this.router.navigate(["/especialidade"]);
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campo Obrigatório!');
        }
      }
    );
  }
}
