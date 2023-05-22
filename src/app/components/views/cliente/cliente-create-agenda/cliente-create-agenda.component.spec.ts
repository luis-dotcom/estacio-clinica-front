import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateAgendaComponent } from './cliente-create-agenda.component';

describe('ClienteCreateAgendaComponent', () => {
  let component: ClienteCreateAgendaComponent;
  let fixture: ComponentFixture<ClienteCreateAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCreateAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCreateAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
