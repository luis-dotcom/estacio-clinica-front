import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEspecialidadeDeleteComponent } from './professor-especialidade-delete.component';

describe('ProfessorEspecialidadeDeleteComponent', () => {
  let component: ProfessorEspecialidadeDeleteComponent;
  let fixture: ComponentFixture<ProfessorEspecialidadeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorEspecialidadeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorEspecialidadeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
