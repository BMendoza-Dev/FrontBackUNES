import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBiografiaComponent } from './forms-biografia.component';

describe('FormsBiografiaComponent', () => {
  let component: FormsBiografiaComponent;
  let fixture: ComponentFixture<FormsBiografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsBiografiaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormsBiografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
