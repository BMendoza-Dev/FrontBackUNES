import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasAsambleistaComponent } from './cuentas-asambleista.component';

describe('CuentasAsambleistaComponent', () => {
  let component: CuentasAsambleistaComponent;
  let fixture: ComponentFixture<CuentasAsambleistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasAsambleistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentasAsambleistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
