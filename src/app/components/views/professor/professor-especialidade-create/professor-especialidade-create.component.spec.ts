import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEspecialidadeCreateComponent } from './professor-especialidade-create.component';

describe('ProfessorEspecialidadeCreateComponent', () => {
  let component: ProfessorEspecialidadeCreateComponent;
  let fixture: ComponentFixture<ProfessorEspecialidadeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorEspecialidadeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorEspecialidadeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
