import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdministradorComponent } from './table-administrador.component';

describe('TableAdministradorComponent', () => {
  let component: TableAdministradorComponent;
  let fixture: ComponentFixture<TableAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
