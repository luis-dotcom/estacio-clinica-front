import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Agenda } from 'src/app/components/models/agenda.modelo';
import { Aluno } from 'src/app/components/models/aluno.modelo';
import { Especialidade } from 'src/app/components/models/especialidade.modelo';
import { AgendaService } from 'src/app/components/services/agenda.service';
import { EspecialidadeService } from 'src/app/components/services/especialidade.service';
import { AlunoService } from 'src/app/components/services/aluno.service';

@Component({
  selector: 'app-professor-update-agenda',
  templateUrl: './professor-update-agenda.component.html',
  styleUrls: ['./professor-update-agenda.component.css'],
})
export class ProfessorUpdateAgendaComponent implements OnInit {
  agenda: Agenda = {
    nome: '',
    data: '',
    fone: '',
    cpf: '',
    especialidade: '',
    nomeAluno: '',
    presenca: false
  };

  especialidades: Especialidade[] = [];
  alunos: Aluno[] = [];
  atividadeFixa!: boolean;
  curso!: String;

  constructor(
    private service: AgendaService,
    private router: Router,
    private serviceEsp: EspecialidadeService,
    private route: ActivatedRoute,
    private serviceAluno: AlunoService
  ) {}

  ngOnInit(): void {
    this.agenda.id = this.route.snapshot.paramMap.get('id')!;
    this.buscarPorId();
    this.listarSelects();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.agenda.id!).subscribe((resposta) => {
      this.agenda.nome = resposta.nome;
      this.agenda.data = resposta.data;
      this.agenda.fone = resposta.fone;
      this.agenda.cpf = resposta.cpf;
      this.agenda.especialidade = resposta.especialidade;
      this.agenda.nomeAluno = resposta.nomeAluno;
      this.curso = resposta.especialidade;
      this.serviceAluno.listarAlunoPorCurso(this.curso).subscribe((resposta) => {
        this.alunos = resposta;
      });
    });
  }

  public atualizarAgenda(): void {
    this.service.updateAgendaService(this.agenda).subscribe(
      (resposta) => {
        this.router.navigate(['/professor/agenda']);
        this.service.mensagem('Agenda atualizada com sucesso!');
      },
      (err) => {
        this.service.mensagem(
          'Validar se todos os campos estão preenchidos corretamente!'
        );
      }
    );
  }

  public listarSelects() {
    this.serviceEsp.listarEspecialidadesService().subscribe((resposta) => {
      this.especialidades = resposta;
    });
  }

  public navegarParaAgenda() {
    this.router.navigate(['professor/agenda']);
  }
}
