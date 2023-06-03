import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta } from 'src/app/components/models/consulta.modelo';
import { ClienteService } from 'src/app/components/services/cliente.service';
import { ConsultaService } from 'src/app/components/services/consulta.service';

@Component({
  selector: 'app-professor-create-consultas',
  templateUrl: './professor-create-consultas.component.html',
  styleUrls: ['./professor-create-consultas.component.css']
})
export class ProfessorCreateConsultasComponent implements OnInit{

  consulta: Consulta = {
    matricula: "",
    nomeAtendente: "",
    queixas: "",
    plano: "",
    avaliacao: "",
    exames: "",
    encaminhamento: "",
    dataConsulta: "",
    observacao: ""
  }

  id_cliente: string = "";
  nome!: String
 constructor(
    private serviceConsulta: ConsultaService,
    private serviceCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get("id_cliente")!;
    this.nome = this.route.snapshot.paramMap.get("nome")!;
    this.buscarNome();
  }

  buscarNome (): void{
  this.serviceCliente.buscarPorId(this.id_cliente).subscribe((reposta) => {
    this.nome = reposta.nome;
  });
  }


  public criarConsulta(): void {
    this.serviceConsulta.criarConsultaService(this.id_cliente, this.consulta).subscribe(
      (resposta) => {
        this.router.navigate(["professor/clientes/" + this.id_cliente + "/consultas"]);
        this.serviceConsulta.mensagem("Consulta criada com sucesso!");
      })
  }

  public navegarParaListaConsultas(): void {
    this.router.navigate(["professor/clientes/" + this.id_cliente + "/consultas"]);
  }
}
