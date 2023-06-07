import { AlunoViewsUpdateComponent } from './components/views/aluno-views/aluno-views-update/aluno-views-update.component';
import { ProfessorUpdateAgendaComponent } from './components/views/professor/professor-update-agenda/professor-update-agenda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaReadComponent } from './components/views/agenda/agenda-read/agenda-read.component';
import { AgendaUpdateComponent } from './components/views/agenda/agenda-update/agenda-update.component';
import { AlunoCreateComponent } from './components/views/aluno/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './components/views/aluno/aluno-delete/aluno-delete.component';
import { AlunoReadComponent } from './components/views/aluno/aluno-read/aluno-read.component';
import { AlunoUpdateComponent } from './components/views/aluno/aluno-update/aluno-update.component';
import { ClienteConsultaDetalhadaComponent } from './components/views/cliente/cliente-consulta-detalhada/cliente-consulta-detalhada.component';
import { ClienteCreateAgendaComponent } from './components/views/cliente/cliente-create-agenda/cliente-create-agenda.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadConsultasComponent } from './components/views/cliente/cliente-read-consultas/cliente-read-consultas.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read-option/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ConsultaCreateComponent } from './components/views/consulta/consulta-create/consulta-create.component';
import { EspecialidadReadComponent } from './components/views/especialidade/especialidad-read/especialidad-read.component';
import { FilaReadComponent } from './components/views/fila/fila-read/fila-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';
import { ProfessorHomeComponent } from './components/views/professor/professor-home/professor-home.component';
import { ProfessorReadAgendaComponent } from './components/views/professor/professor-read-agenda/professor-read-agenda.component';
import { ProfessorReadConsultasComponent } from './components/views/professor/professor-read-consultas/professor-read-consultas.component';
import { ProfessorCreateConsultasComponent } from './components/views/professor/professor-create-consultas/professor-create-consultas.component';
import { ProfessorConsultaDetalhadaComponent } from './components/views/professor/professor-consulta-detalhada/professor-consulta-detalhada.component';
import { AlunoHomeComponent } from './components/views/aluno-views/aluno-home/aluno-home.component';
import { AlunoReadAgendaComponent } from './components/views/aluno-views/aluno-read-agenda/aluno-read-agenda.component';
import { AlunoReadConsultasComponent } from './components/views/aluno-views/aluno-read-consultas/aluno-read-consultas.component';
import { AlunoCreateConsultaComponent } from './components/views/aluno-views/aluno-create-consulta/aluno-create-consulta.component';
import { AlunoConsultaDetalhadaComponent } from './components/views/aluno-views/aluno-consulta-detalhada/aluno-consulta-detalhada.component';
import { RecepcaoHomeComponent } from './components/views/recepcao-views/recepcao-home/recepcao-home.component';
import { RecepcaoReadAgendaComponent } from './components/views/recepcao-views/recepcao-read-agenda/recepcao-read-agenda.component';
import { RecepcaoReadClienteComponent } from './components/views/recepcao-views/recepcao-read-cliente/recepcao-read-cliente.component';
import { RecepcaoCreateClienteComponent } from './components/views/recepcao-views/recepcao-create-cliente/recepcao-create-cliente.component';
import { RecepcaoUpdateClienteComponent } from './components/views/recepcao-views/recepcao-update-cliente/recepcao-update-cliente.component';
import { RecepcaoCreateAgendaComponent } from './components/views/recepcao-views/recepcao-create-agenda/recepcao-create-agenda.component';
import { RecepcaoReadConsultasComponent } from './components/views/recepcao-views/recepcao-read-consultas/recepcao-read-consultas.component';
import { RecepcaoConsultaDetalhadaComponent } from './components/views/recepcao-views/recepcao-consulta-detalhada/recepcao-consulta-detalhada.component';
import { ProfessorUpdateComponent } from './components/views/professor/professor-update/professor-update.component';
import { RecepcaoUpdateComponent } from './components/views/recepcao-views/recepcao-update/recepcao-update.component';
import { ProfessorEspecialidadeComponent } from './components/views/professor/professor-especialidade/professor-especialidade.component';
import { CanActiveGuard } from './components/views/guard/can-active.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [CanActiveGuard] },
  { path: "home/professor", component: ProfessorHomeComponent , canActivate: [CanActiveGuard]},
  { path: "home/aluno", component: AlunoHomeComponent , canActivate: [CanActiveGuard]},
  { path: "home/recepcao", component: RecepcaoHomeComponent , canActivate: [CanActiveGuard]},
  { path: "professor/agenda", component: ProfessorReadAgendaComponent, canActivate: [CanActiveGuard]},
  { path: "professor/update/:id", component: ProfessorUpdateComponent, canActivate: [CanActiveGuard]},
  { path: "professor/especialidade" , component: ProfessorEspecialidadeComponent, canActivate: [CanActiveGuard] },
  { path: "professor/clientes/consulta/:id_cliente/consultas/create", component: ProfessorCreateConsultasComponent, canActivate: [CanActiveGuard] },
  { path: "professor/clientes/:id_cliente/consultas", component: ProfessorReadConsultasComponent, canActivate: [CanActiveGuard] },
  { path: "professor/agenda/update/:id" , component: ProfessorUpdateAgendaComponent, canActivate: [CanActiveGuard] },
  { path: "professor/clientes/:id_cliente/consultas/:id_consulta/consulta", component: ProfessorConsultaDetalhadaComponent, canActivate: [CanActiveGuard]},
  { path: "aluno/update/:id", component: AlunoViewsUpdateComponent, canActivate: [CanActiveGuard]},
  { path: "aluno/agenda", component: AlunoReadAgendaComponent, canActivate: [CanActiveGuard]},
  { path: "aluno/clientes/consulta/:id_cliente/consultas/create", component: AlunoCreateConsultaComponent , canActivate: [CanActiveGuard]},
  { path: "aluno/clientes/:id_cliente/consultas", component: AlunoReadConsultasComponent, canActivate: [CanActiveGuard] },
  { path: "aluno/clientes/:id_cliente/consultas/:id_consulta/consulta", component: AlunoConsultaDetalhadaComponent, canActivate: [CanActiveGuard]},
  { path: "recepcao/update/:id", component: RecepcaoUpdateComponent, canActivate: [CanActiveGuard]},
  { path: "recepcao/agenda", component: RecepcaoReadAgendaComponent, canActivate: [CanActiveGuard]},
  { path: "recepcao/clientes/create", component: RecepcaoCreateClienteComponent, canActivate: [CanActiveGuard]},
  { path: "recepcao/clientes", component: RecepcaoReadClienteComponent , canActivate: [CanActiveGuard]},
  { path: "recepcao/clientes/update/:id", component: RecepcaoUpdateClienteComponent, canActivate: [CanActiveGuard]},
  { path: "recepcao/clientes/:id_cliente/consultas", component: RecepcaoReadConsultasComponent, canActivate: [CanActiveGuard] },
  { path: "recepcao/clientes/:id_cliente/consultas/:id_consulta/consulta", component: RecepcaoConsultaDetalhadaComponent, canActivate: [CanActiveGuard]},
  { path: "recepcao/clientes/agenda/create/:id" , component: RecepcaoCreateAgendaComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/consulta/:id_cliente/consultas/create", component: ConsultaCreateComponent, canActivate: [CanActiveGuard] },
  { path: "clientes", component: ClienteReadComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/create", component: ClienteCreateComponent, canActivate: [CanActiveGuard]},
  { path: "clientes/update/:id", component: ClienteUpdateComponent, canActivate: [CanActiveGuard]},
  { path: "clientes/delete/:id", component: ClienteDeleteComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/:id_cliente/consultas", component: ClienteReadConsultasComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/agenda/create/:id" , component: ClienteCreateAgendaComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/:cpf/consultas", component: ClienteReadConsultasComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/:id_cliente/consultas/:id_consulta/consulta", component: ClienteConsultaDetalhadaComponent, canActivate: [CanActiveGuard]},
  { path: "alunos", component: AlunoReadComponent, canActivate: [CanActiveGuard] },
  { path: "alunos/create", component: AlunoCreateComponent, canActivate: [CanActiveGuard] },
  { path: "alunos/update/:id", component: AlunoUpdateComponent, canActivate: [CanActiveGuard] },
  { path: "alunos/delete/:id", component: AlunoDeleteComponent, canActivate: [CanActiveGuard] },
  { path: "usuarios", component: UsuarioReadComponent, canActivate: [CanActiveGuard] },
  { path: "usuarios/create", component: UsuarioCreateComponent, canActivate: [CanActiveGuard] },
  { path: "usuarios/update/:id", component: UsuarioUpdateComponent, canActivate: [CanActiveGuard] },
  { path: "usuarios/delete/:id", component: UsuarioDeleteComponent, canActivate: [CanActiveGuard] },
  { path: "agenda", component: AgendaReadComponent, canActivate: [CanActiveGuard]},
  { path: "agenda/update/:id" , component: AgendaUpdateComponent, canActivate: [CanActiveGuard] },
  { path: "especialidade" , component: EspecialidadReadComponent, canActivate: [CanActiveGuard] },
  { path: "fila" , component: FilaReadComponent, canActivate: [CanActiveGuard] },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
