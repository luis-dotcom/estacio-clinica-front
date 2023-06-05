import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoUpdateComponent } from './recepcao-update.component';

describe('RecepcaoUpdateComponent', () => {
  let component: RecepcaoUpdateComponent;
  let fixture: ComponentFixture<RecepcaoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
