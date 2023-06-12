import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/components/models/usuario.modelo';
import { UsuarioService } from 'src/app/components/services/usuario.service';


interface TipoPerfil {
  valor: string;
  viewValor: string;
}

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css'],
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    matricula: '',
    nome: '',
    tipoPerfil: '',
    cpf: '',
    endereco: '',
    email: '',
    senha: '',
    telefone:''
  };

  tipos: TipoPerfil[] = [
    { valor: 'ADMIN', viewValor: 'ADMIN' },
    { valor: 'ALUNO', viewValor: 'ALUNO' },
    { valor: 'PROFESSOR', viewValor: 'PROFESSOR' },
    { valor: 'RECEPCIONISTA', viewValor: 'RECEPCIONISTA' },
  ];

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  public criarUsuario(): void {
    this.service.criarUsuarioService(this.usuario).subscribe(
      (resposta) => {
        this.router.navigate(['usuarios']);
        this.service.mensagem("Cadastro adicionado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campos Obrigatórios!');
        }
      }
    );
  }

  public navegarParaListaUsuarios() {
    this.router.navigate(['usuarios']);
  }
}
