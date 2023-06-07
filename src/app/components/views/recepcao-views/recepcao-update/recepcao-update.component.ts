import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/components/models/usuario.modelo';
import { UsuarioService } from 'src/app/components/services/usuario.service';

@Component({
  selector: 'app-recepcao-update',
  templateUrl: './recepcao-update.component.html',
  styleUrls: ['./recepcao-update.component.css']
})
export class RecepcaoUpdateComponent implements OnInit{

  usuario: Usuario = {
    matricula: "",
    nome: "",
    tipoPerfil: "",
    cpf: "",
    endereco: "",
    email: "",
    senha: "",
    telefone:''
    };

    hide = true;

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.usuario.id!).subscribe((resposta) => {
      this.usuario.matricula = resposta.matricula;
      this.usuario.nome = resposta.nome;
      this.usuario.tipoPerfil = resposta.tipoPerfil;
      this.usuario.cpf = resposta.cpf;
      this.usuario.endereco = resposta.endereco;
      this.usuario.email = resposta.email;
      this.usuario.senha = resposta.senha;
      this.usuario.telefone = resposta.telefone;
    });
  }

  public atualizarUsuario(): void {
     this.service.updateUsuarioService(this.usuario).subscribe((resposta) => {
      this.router.navigate(["/home/recepcao"]);
      this.service.mensagem("Usuário (" + this.usuario.nome + ") atualizado com sucesso!")
     }, err => {
      this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
     })
  }

  public navegarParaListaUsuarios(){
    this.router.navigate(["/home/recepcao"]);
  }
}
