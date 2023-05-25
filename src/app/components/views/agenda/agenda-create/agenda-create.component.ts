import { AlunoService } from './../../aluno/service.service';
import { EspecialidadeService } from './../../especialidade/especialidade.service';
import { Especialidade } from '../../especialidade/especialidade.modelo';
import { Agenda } from './../agenda.modelo';
import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../../aluno/aluno.modelo';

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
    presenca: false
  };

  selects: Especialidade[] = [];
  alunos: Aluno[] = [];

  constructor(
    private service: AgendaService,
    private router: Router,
    private serviceEsp: EspecialidadeService,
    private serviceAluno: AlunoService
  ) {}

  ngOnInit(): void {
    this.listarSelects();
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

  public listarSelects() {
    this.serviceEsp.listarEspecialidadesService().subscribe((resposta) => {
      this.selects = resposta;
    });
    this.serviceAluno.listarAlunosService().subscribe((resposta) => {
      this.alunos = resposta;
    });
  }

  public navegarParaListaAgenda() {
    this.router.navigate(['agenda']);
  }
}
