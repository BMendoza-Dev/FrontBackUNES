import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPracticaComponent } from './tabla-practica.component';

describe('TablaPracticaComponent', () => {
  let component: TablaPracticaComponent;
  let fixture: ComponentFixture<TablaPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPracticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
