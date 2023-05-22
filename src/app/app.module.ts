import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AgendaCreateComponent } from './components/views/agenda/agenda-create/agenda-create.component';
import { AgendaReadComponent } from './components/views/agenda/agenda-read/agenda-read.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read-option/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ClienteService } from './components/views/cliente/cliente.service';
import { ConsultaCreateComponent } from './components/views/consulta/consulta-create/consulta-create.component';
import { ClienteReadConsultasComponent } from './components/views/cliente/cliente-read-consultas/cliente-read-consultas.component';
import { ClienteConsultaDetalhadaComponent } from './components/views/cliente/cliente-consulta-detalhada/cliente-consulta-detalhada.component';
import { LoginComponent } from './components/views/login/login.component';
import { AgendaUpdateComponent } from './components/views/agenda/agenda-update/agenda-update.component';
import { FilaReadComponent } from './components/views/fila/fila-read/fila-read.component';
import { CreateComponent } from './components/views/fila/create/create.component';
import { DeleteComponent } from './components/views/fila/delete/delete.component';
import { ClienteCreateAgendaComponent } from './components/views/cliente/cliente-create-agenda/cliente-create-agenda.component';
import { EspecialidadeCreateComponent } from './components/views/especialidade/especialidade-create/especialidade-create.component';
import { EspecialidadeDeleteComponent } from './components/views/especialidade/especialidade-delete/especialidade-delete.component';
import { EspecialidadReadComponent } from './components/views/especialidade/especialidad-read/especialidad-read.component';

import { AlunoCreateComponent } from './components/views/aluno/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './components/views/aluno/aluno-delete/aluno-delete.component';
import { AlunoUpdateComponent } from './components/views/aluno/aluno-update/aluno-update.component';
import { AlunoReadComponent } from './components/views/aluno/aluno-read/aluno-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClienteReadComponent,
    ClienteDeleteComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ConsultaCreateComponent,
    AgendaCreateComponent,
    AgendaReadComponent,
    ClienteReadConsultasComponent,
    ClienteConsultaDetalhadaComponent,
    LoginComponent,
    AgendaUpdateComponent,
    FilaReadComponent,
    CreateComponent,
    DeleteComponent,
    ClienteCreateAgendaComponent,
    EspecialidadeCreateComponent,
    EspecialidadeDeleteComponent,
    EspecialidadReadComponent,
    AlunoCreateComponent,
    AlunoDeleteComponent,
    AlunoUpdateComponent,
    AlunoReadComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
  ],
  providers: [ClienteService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
