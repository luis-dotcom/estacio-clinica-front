import { EspecialidadeService } from './../../especialidade/especialidade.service';
import { Especialidade } from '../../especialidade/especialidade.modelo';
import { Agenda } from './../agenda.modelo';
import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-create',
  templateUrl: './agenda-create.component.html',
  styleUrls: ['./agenda-create.component.css'],
})
export class AgendaCreateComponent implements OnInit {
  agenda: Agenda = {
    nome: '',
    data: '',
    fone: '',
    cpf: '',
    especialidade: '',
    nomeAluno: '',
  };
  selects: Especialidade[] = [];

 constructor(private service: AgendaService, private router: Router, private serviceEsp: EspecialidadeService) {}

  ngOnInit(): void {
    this.listarEspecialidade();
  }

  public criarAgendamento(): void {
    this.service.criarAgendaService(this.agenda).subscribe(
      (resposta) => {
        this.router.navigate(['agenda']);
        this.service.mensagem('Agendamento criado com sucesso!');
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campos Obrigatórios!');
        }
      }
    );
  }

  public listarEspecialidade() {
    this.serviceEsp.listarEspecialidadesService().subscribe((resposta) => {
      this.selects = resposta;
    });
  }

  public navegarParaListaAgenda() {
    this.router.navigate(['agenda']);
  }
}
