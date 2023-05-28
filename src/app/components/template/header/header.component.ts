import { LoginComponent } from './../../views/login/login.component';
import { Usuario } from '../../views/usuario/usuario.modelo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../views/cliente/cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {


  nome: String = "";
  constructor(private route: ActivatedRoute,private serviceCliente: ClienteService,) {

  }
  ngOnInit(): void {
    this.buscarNome();
  }

  buscarNome (): void{
    this.serviceCliente.buscarPorId('1').subscribe((reposta) => {
      this.nome = reposta.nome;
    });
    }
}
