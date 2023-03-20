import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoriaComponent } from './select-categoria.component';

describe('SelectCategoriaComponent', () => {
  let component: SelectCategoriaComponent;
  let fixture: ComponentFixture<SelectCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
