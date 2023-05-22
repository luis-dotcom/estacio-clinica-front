import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaReadComponent } from './fila-read.component';

describe('FilaReadComponent', () => {
  let component: FilaReadComponent;
  let fixture: ComponentFixture<FilaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
