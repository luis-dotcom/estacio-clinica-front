import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoViewsUpdateComponent } from './aluno-views-update.component';

describe('AlunoViewsUpdateComponent', () => {
  let component: AlunoViewsUpdateComponent;
  let fixture: ComponentFixture<AlunoViewsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoViewsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoViewsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
