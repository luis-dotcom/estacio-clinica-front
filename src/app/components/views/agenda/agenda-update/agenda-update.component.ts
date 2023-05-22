import { EspecialidadeService } from './../../especialidade/especialidade.service';
import { Component } from '@angular/core';
import { Agenda } from '../agenda.modelo';
import { AgendaService } from '../agenda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidade } from '../../especialidade/especialidade.modelo';

@Component({
  selector: 'app-agenda-update',
  templateUrl: './agenda-update.component.html',
  styleUrls: ['./agenda-update.component.css']
})
export class AgendaUpdateComponent {

  agenda: Agenda = {
    nome: "",
    data: "",
    fone: "",
    cpf: "",
    especialidade:"",
    nomeAluno: ""
  };
  selects: Especialidade[] = [];

  constructor(
    private service: AgendaService,
    private router: Router,
    private serviceEsp: EspecialidadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.agenda.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
    this.listarEspecialidade();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.agenda.id!).subscribe((resposta) => {
      this.agenda.nome = resposta.nome;
      this.agenda.data = resposta.data;
      this.agenda.fone = resposta.fone;
      this.agenda.cpf = resposta.cpf;
      this.agenda.especialidade = resposta.especialidade;
      this.agenda.nomeAluno = resposta.nomeAluno;
    });
  }

  public atualizarAgenda(): void {
     this.service.updateAgendaService(this.agenda).subscribe((resposta) => {
      this.router.navigate(["agenda"]);
      this.service.mensagem("Agenda atualizada com sucesso!")
     }, err => {
      this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
     })
  }

  public listarEspecialidade() {
    this.serviceEsp.listarEspecialidadesService().subscribe((resposta) => {
      this.selects = resposta;
    });
  }

  public navegarParaAgenda(){
    this.router.navigate(["agenda"]);
  }
}
