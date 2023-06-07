import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  usuario!: Usuario

  constructor(
    private router: Router,
    public service: UsuarioService,

  ) {}

  ngOnInit(): void {

  }

  submitLogin() {
    this.service.buscarPorEmail(this.email).subscribe({
      next: (resposta) => {
        this.usuario = resposta;
        this.service.usuario = resposta;
        if(resposta != null ) {
          if (this.usuario.tipoPerfil === 'ADMIN' && this.usuario.email === this.email && this.usuario.senha === this.senha) {
           this.router.navigate(['/home']);
          } else if (this.usuario.tipoPerfil === 'ALUNO' && this.usuario.email === this.email && this.usuario.senha === this.senha) {
           this.router.navigate(['/home/aluno']);
          } else if (this.usuario.tipoPerfil === 'PROFESSOR' && this.usuario.email === this.email && this.usuario.senha === this.senha) {
           this.router.navigate(['/home/professor']);
          } else if (this.usuario.tipoPerfil === 'RECEPCIONISTA' && this.usuario.email === this.email && this.usuario.senha === this.senha) {
           this.router.navigate(['/home/recepcao']);
          } else if (this.usuario.email != this.email || this.usuario.senha != this.senha) {
            this.service.mensagem('Usuário não encontrado E-mail ou Senha incorreto!')
           }
        } else {
        this.service.mensagem('Usuário não encontrado E-mail ou Senha incorreto!')
     }
    }, error: (err) => {}
  });
 }
}
