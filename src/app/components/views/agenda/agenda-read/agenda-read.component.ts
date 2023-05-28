import { Agenda } from './../agenda.modelo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-agenda-read',
  templateUrl: './agenda-read.component.html',
  styleUrls: ['./agenda-read.component.css'],
})
export class AgendaReadComponent implements OnInit {
  displayedColumns: string[] = [
    'nome',
    'cpf',
    'data',
    'fone',
    'especialidade',
    'nomeAluno',
    'acoes',
  ];

  agenda: Agenda[] = [];
  qtdAgendadas!: number;
  dataSource!: MatTableDataSource<Agenda>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private serviceAgenda: AgendaService,
    private router: Router,
  ) {
    this.serviceAgenda.listarAgendasService().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  public ngOnInit(): void {
    this.quantidadeAgendadas();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public quantidadeAgendadas() {
    this.serviceAgenda.quantidadeAgendadas().subscribe((resposta) => {
      this.qtdAgendadas = resposta;
    });
  }
}
