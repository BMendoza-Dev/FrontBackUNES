import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDignidadComponent } from './forms-dignidad.component';

describe('FormsDignidadComponent', () => {
  let component: FormsDignidadComponent;
  let fixture: ComponentFixture<FormsDignidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDignidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDignidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
