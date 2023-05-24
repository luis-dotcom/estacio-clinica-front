import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario/usuario.modelo';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  senha!: string;

  constructor(
    private router: Router,
    public service: UsuarioService
  ) {}

  ngOnInit(): void {

  }

  submitLogin() {
    this.service.buscarPorSenha(this.senha).subscribe(
      (resposta) => {
        let usuario = resposta;
        console.log(usuario);
        if (usuario.tipoPerfil === 'ADMIN' && usuario.email === this.email) {
          this.router.navigate(['/home']);
        } else if (usuario.tipoPerfil === 'ALUNO' && usuario.email === this.email) {
          this.router.navigate(['/alunos']);
        } else if (usuario.tipoPerfil === 'RECEPCIONISTA' && usuario.email === this.email) {
          this.router.navigate(['/usuarios']);
        }
      },
      (_err) => {
        this.service.mensagem('Usuário não encontrado!');
      }
    );
  }
}
