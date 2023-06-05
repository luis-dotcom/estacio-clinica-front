import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEspecialidadeComponent } from './professor-especialidade.component';

describe('ProfessorEspecialidadeComponent', () => {
  let component: ProfessorEspecialidadeComponent;
  let fixture: ComponentFixture<ProfessorEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
