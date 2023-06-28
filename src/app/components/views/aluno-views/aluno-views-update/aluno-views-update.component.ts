import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/components/models/aluno.modelo';
import { Especialidade } from 'src/app/components/models/especialidade.modelo';
import { EspecialidadeService } from 'src/app/components/services/especialidade.service';
import { AlunoService } from 'src/app/components/services/aluno.service';

interface TipoPerfil {
  valor: string;
  viewValor: string;
}

@Component({
  selector: 'app-aluno-views-update',
  templateUrl: './aluno-views-update.component.html',
  styleUrls: ['./aluno-views-update.component.css']
})
export class AlunoViewsUpdateComponent implements OnInit{

  aluno: Aluno = {
    matricula: '',
    nome: '',
    tipoPerfil: '',
    cpf: '',
    endereco: '',
    email: '',
    senha: '',
    curso: '',
    telefone: '',
  };

  hide = true;
  selects: Especialidade[] = [];
  tipos: TipoPerfil[] = [{ valor: 'ALUNO', viewValor: 'ALUNO' }];

  constructor(
    private service: AlunoService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceEsp: EspecialidadeService
  ) {}

  ngOnInit(): void {
    this.aluno.id = this.route.snapshot.paramMap.get('id')!;
    this.listarEspecialidade();
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.aluno.id!).subscribe((resposta) => {
      this.aluno.matricula = resposta.matricula;
      this.aluno.nome = resposta.nome;
      this.aluno.tipoPerfil = resposta.tipoPerfil;
      this.aluno.cpf = resposta.cpf;
      this.aluno.endereco = resposta.endereco;
      this.aluno.email = resposta.email;
      this.aluno.senha = resposta.senha;
      this.aluno.curso = resposta.curso;
      this.aluno.telefone = resposta.telefone;
    });
  }

  public listarEspecialidade() {
    this.serviceEsp.listarEspecialidadesService().subscribe((resposta) => {
      this.selects = resposta;
    });
  }

  public atualizarAluno(): void {
    this.service.updateAlunoService(this.aluno).subscribe(
      (resposta) => {
        this.router.navigate(['/home/aluno']);
        this.service.mensagem('Cadastro atualizado com sucesso!');
      },
      (err) => {
        this.service.mensagem(
          'Validar se todos os campos estão preenchidos corretamente!'
        );
      }
    );
  }

  public navegarParaHomeAluno() {
    this.router.navigate(['/home/aluno']);
  }
}
