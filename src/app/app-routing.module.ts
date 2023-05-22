import { LoginComponent } from './components/views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { AgendaCreateComponent } from './components/views/agenda/agenda-create/agenda-create.component';
import { AgendaReadComponent } from './components/views/agenda/agenda-read/agenda-read.component';
import { ClienteConsultaDetalhadaComponent } from './components/views/cliente/cliente-consulta-detalhada/cliente-consulta-detalhada.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadConsultasComponent } from './components/views/cliente/cliente-read-consultas/cliente-read-consultas.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read-option/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ConsultaCreateComponent } from './components/views/consulta/consulta-create/consulta-create.component';
import { AgendaUpdateComponent } from './components/views/agenda/agenda-update/agenda-update.component';
import { FilaReadComponent } from './components/views/fila/fila-read/fila-read.component';
import { DeleteComponent } from './components/views/fila/delete/delete.component';
import { CreateComponent } from './components/views/fila/create/create.component';
import { ClienteCreateAgendaComponent } from './components/views/cliente/cliente-create-agenda/cliente-create-agenda.component';
import { EspecialidadReadComponent } from './components/views/especialidade/especialidad-read/especialidad-read.component';
import { EspecialidadeCreateComponent } from './components/views/especialidade/especialidade-create/especialidade-create.component';
import { EspecialidadeDeleteComponent } from './components/views/especialidade/especialidade-delete/especialidade-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "clientes/consulta/:id_cliente/consultas/create", component: ConsultaCreateComponent },
  { path: "clientes", component: ClienteReadComponent },
  { path: "clientes/create", component: ClienteCreateComponent },
  { path: "clientes/update/:id", component: ClienteUpdateComponent },
  { path: "clientes/delete/:id", component: ClienteDeleteComponent },
  { path: "clientes/:id_cliente/consultas", component: ClienteReadConsultasComponent },
  { path: "clientes/:id_cliente/consultas/:id_consulta/consulta", component: ClienteConsultaDetalhadaComponent},
  { path: "agenda", component: AgendaReadComponent },
  { path: "agenda/create", component: AgendaCreateComponent },
  { path: "agenda/update/:id" , component: AgendaUpdateComponent },
  { path: "clientes/agenda/create/:id" , component: ClienteCreateAgendaComponent },
  { path: "fila" , component: FilaReadComponent },
  { path: "fila/delete/:id" , component: DeleteComponent },
  { path: "fila/create" , component: CreateComponent },
  { path: "especialidade" , component: EspecialidadReadComponent },
  { path: "especialidade/create" , component: EspecialidadeCreateComponent },
  { path: "especialidade/delete/:id" , component: EspecialidadeDeleteComponent },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
