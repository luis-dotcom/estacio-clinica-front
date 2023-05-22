import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fila } from '../fila.modelo';
import { FilaService } from '../fila.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  fila: Fila = {
    nome: "",
    sala: ""
  };

  constructor(private service: FilaService, private router: Router) {}

  ngOnInit(): void {}

  public criarAgendamento(): void {
    this.service.criarFilaService(this.fila).subscribe(
      (resposta) => {
        this.router.navigate(["fila"]);
        this.service.mensagem("Paciente adicionado á Fila!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem("Campo Obrigatório!");
        }
      }
    );
  }

  public navegarParaListaDaFila() {
    this.router.navigate(["fila"]);
  }
}
