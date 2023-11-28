import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPerfilComponent } from './forms-perfil.component';

describe('FormsPerfilComponent', () => {
  let component: FormsPerfilComponent;
  let fixture: ComponentFixture<FormsPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
