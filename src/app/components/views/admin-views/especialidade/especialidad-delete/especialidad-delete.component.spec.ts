import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadDeleteComponent } from './especialidad-delete.component';

describe('EspecialidadDeleteComponent', () => {
  let component: EspecialidadDeleteComponent;
  let fixture: ComponentFixture<EspecialidadDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
