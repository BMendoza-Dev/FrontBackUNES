import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectoComponent } from './form-directo.component';

describe('FormDirectoComponent', () => {
  let component: FormDirectoComponent;
  let fixture: ComponentFixture<FormDirectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDirectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDirectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
