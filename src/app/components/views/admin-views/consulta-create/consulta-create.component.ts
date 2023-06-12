import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta } from '../../../models/consulta.modelo';
import { ConsultaService } from '../../../services/consulta.service';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-consulta-create',
  templateUrl: './consulta-create.component.html',
  styleUrls: ['./consulta-create.component.css']
})
export class ConsultaCreateComponent implements OnInit{

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

  data = new Date();
  dia = String(this.data.getDate()).padStart(2, '0');
  mes = String(this.data.getMonth() + 1).padStart(2, '0');
  ano = this.data.getFullYear();
  dataAtual = `${this.dia}/${this.mes}/${this.ano}`
  dataConvertida : string = String(this.dataAtual);


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
    this.consulta.dataConsulta = this.dataConvertida;
  }

  buscarNome (): void{
  this.serviceCliente.buscarPorId(this.id_cliente).subscribe((reposta) => {
    this.nome = reposta.nome;
  });
  }


  public criarConsulta(): void {
    this.consulta.dataConsulta = this.dataConvertida;
    this.serviceConsulta.criarConsultaService(this.id_cliente, this.consulta).subscribe(
      (resposta) => {
        this.router.navigate(["clientes/" + this.id_cliente + "/consultas"]);
        this.serviceConsulta.mensagem("Consulta adicionada com sucesso!");
      })
  }

  public navegarParaListaConsultas(): void {
    this.router.navigate(["clientes/" + this.id_cliente + "/consultas"]);
  }
}
