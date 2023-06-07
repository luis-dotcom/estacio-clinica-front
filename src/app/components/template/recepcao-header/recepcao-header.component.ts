import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-recepcao-header',
  templateUrl: './recepcao-header.component.html',
  styleUrls: ['./recepcao-header.component.css']
})
export class RecepcaoHeaderComponent implements OnInit {

  id ='';
  nome: String = '';
  constructor(private service: UsuarioService) {}
  ngOnInit(): void {
    this.id = this.service.usuario && this.service.usuario.id ?  this.service.usuario.id : '';
    this.buscarNome();
  }

  buscarNome(): void {
    this.service.buscarPorId(this.id).subscribe((reposta) => {
      this.nome = reposta.nome;
    });
  }
}
