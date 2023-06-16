import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.modelo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email!: string;
  senha!: string;
  usuario!: Usuario;
  private token: any;

  constructor(private router: Router, public service: UsuarioService) {}

  ngOnInit(): void {}

  submitLogin() {
    this.service.validarSenha(this.email, this.senha).subscribe({
      next: (resposta) => {
        this.token = resposta;
        if (this.token === true) {
          this.service.buscarPorEmail(this.email).subscribe({
            next: (resposta) => {
              this.usuario = resposta;
              this.service.usuario = resposta;
              if (resposta != null) {
                if (this.usuario.tipoPerfil === 'ADMIN') {
                  this.router.navigate(['/home']);
                } else if (this.usuario.tipoPerfil === 'ALUNO') {
                  this.router.navigate(['/home/aluno']);
                } else if (this.usuario.tipoPerfil === 'PROFESSOR') {
                  this.router.navigate(['/home/professor']);
                } else if (this.usuario.tipoPerfil === 'RECEPCIONISTA') {
                  this.router.navigate(['/home/recepcao']);
                }
              }
            },
            error: (err) => {},
          });
        }
      },
      error: (err) => {
        this.service.mensagem(
          'Usuário não encontrado E-mail ou Senha incorreto!'
        );
      },
    });
  }
}
