import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../cliente/cliente.modelo';
import { ClienteService } from '../../cliente/cliente.service';
import { Consulta } from '../consulta.modelo';
import { ConsultaService } from '../consulta.service';

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

  id_cliente: String = "";

 constructor(
    private service: ConsultaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get("id_cliente")!;
  }

  public criarConsulta(): void {
    this.service.criarConsultaService(this.id_cliente, this.consulta).subscribe(
      (resposta) => {
        this.router.navigate(["clientes/consulta/" + this.id_cliente + "/consultas"]);
        this.service.mensagem("Consulta criada com sucesso!");
      })
  }

  public navegarParaListaConsultas(): void {
    this.router.navigate(["clientes/consulta/" + this.id_cliente + "/consultas"]);
  }
}
