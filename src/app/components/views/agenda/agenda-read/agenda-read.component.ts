import { Agenda } from './../agenda.modelo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-agenda-read',
  templateUrl: './agenda-read.component.html',
  styleUrls: ['./agenda-read.component.css']
})
export class AgendaReadComponent implements OnInit {

  displayedColumns: string[] = [
    "id",
    "nome",
    "cpf",
    "data",
    "fone",
    "especialidade",
    "nomeAluno",
    "presenca",
    "acoes"
  ];


  agenda: Agenda[] = [];
  qtdAgendadas!: number;
  dataSource!: MatTableDataSource<Agenda>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

constructor(private service: AgendaService, private router: Router) {
    this.service.listarAgendasService().subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      })
  }

  public ngOnInit(): void {
   this.listarAgenda();
   this.quantidadeAgendadas();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public listarAgenda() {
    this.service.listarAgendasService().subscribe((resposta) => {
      this.agenda = resposta;
    });
  }

  public quantidadeAgendadas() {
    this.service.quantidadeAgendadas().subscribe((resposta) => {
      this.qtdAgendadas = resposta;
    });
  }

  public navegarParaAgendaCreate() {
    this.router.navigate(["agenda/create"]);
  }
}
