import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAdministradorComponent } from './forms-administrador.component';

describe('FormsAdministradorComponent', () => {
  let component: FormsAdministradorComponent;
  let fixture: ComponentFixture<FormsAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
