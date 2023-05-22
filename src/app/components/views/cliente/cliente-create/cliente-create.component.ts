import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "../cliente.modelo";
import { ClienteService } from "../cliente.service";

@Component({
  selector: "app-cliente-create",
  templateUrl: "./cliente-create.component.html",
  styleUrls: ["./cliente-create.component.css"],
})
export class ClienteCreateComponent {
  cliente: Cliente = {
    nome: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    cpf: "",
    sexo: "",
    nomeMae: "",
    naturalidade:"",
    endereco: "",
    cidade:""
  };

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  public criarCliente(): void {
    this.service.criarClienteService(this.cliente).subscribe(
      (resposta) => {
        this.router.navigate(["clientes"]);
        this.service.mensagem("Cliente criado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem("Campos Obrigatórios!");
        }
      }
    );
  }

  public navegarParaListaClientes() {
    this.router.navigate(["clientes"]);
  }
}
