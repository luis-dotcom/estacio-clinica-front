import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../views/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  nome!:string;
  constructor(private route: ActivatedRoute, public service: UsuarioService,) {


  nome: String = '';
  constructor(private service: UsuarioService) {}
  ngOnInit(): void {
    this.id = this.service.usuario && this.service.usuario.id ?  this.service.usuario.id : '1';
    this.buscarNome();
  }

  buscarNome(): void {
    this.service.buscarPorId('1').subscribe((reposta) => {
      this.nome = reposta.nome;
    });
  }
}
