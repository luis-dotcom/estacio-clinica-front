import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadReadComponent } from './especialidad-read.component';

describe('EspecialidadReadComponent', () => {
  let component: EspecialidadReadComponent;
  let fixture: ComponentFixture<EspecialidadReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
