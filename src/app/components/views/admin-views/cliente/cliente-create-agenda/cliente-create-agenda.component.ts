import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Agenda } from "src/app/components/models/agenda.modelo";
import { Cliente } from "src/app/components/models/cliente.modelo";
import { Especialidade } from "src/app/components/models/especialidade.modelo";
import { AgendaService } from "src/app/components/services/agenda.service";
import { ClienteService } from "src/app/components/services/cliente.service";
import { EspecialidadeService } from "src/app/components/services/especialidade.service";


@Component({
  selector: 'app-cliente-create-agenda',
  templateUrl: './cliente-create-agenda.component.html',
  styleUrls: ['./cliente-create-agenda.component.css'],
})
export class ClienteCreateAgendaComponent implements OnInit {


  cliente: Cliente = {
    nome: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    cpf: '',
    sexo: '',
    nomeMae: '',
    naturalidade: '',
    endereco: '',
    cidade: '',
    bairro:''
  };
  agenda: Agenda = {
    nome: '',
    data: '',
    fone: '',
    cpf: '',
    especialidade: '',
    nomeAluno: '',
  };

  selects: Especialidade[] = [];

  constructor(
    private serviceAgen: AgendaService,
    private serviceCli: ClienteService,
    private serviceEsp: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')!;
    this.buscarPorId();
    this.listarEspecialidade();
  }

  public buscarPorId(): void {
    this.serviceCli.buscarPorId(this.cliente.id!).subscribe((resposta) => {
      this.cliente.nome = resposta.nome;
      this.cliente.telefone = resposta.telefone;
      this.cliente.cpf = resposta.cpf;
    });
  }

  public criarAgendamento(): void {
    this.agenda.nome = this.cliente.nome;
    this.agenda.fone = this.cliente.telefone;
    this.agenda.cpf = this.cliente.cpf;
    this.serviceAgen.criarAgendaService(this.cliente.id! ,this.agenda).subscribe(
      (resposta) => {
        this.router.navigate(['agenda']);
        this.serviceAgen.mensagem('Agendamento adicionado com sucesso!');
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.serviceAgen.mensagem('Campos Obrigatórios!');
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
    this.router.navigate(['clientes']);
  }
}
