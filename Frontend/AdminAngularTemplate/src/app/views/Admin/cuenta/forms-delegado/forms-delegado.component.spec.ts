import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDelegadoComponent } from './forms-delegado.component';

describe('FormsDelegadoComponent', () => {
  let component: FormsDelegadoComponent;
  let fixture: ComponentFixture<FormsDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDelegadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
