import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDelegadoComponent } from './table-delegado.component';

describe('TableDelegadoComponent', () => {
  let component: TableDelegadoComponent;
  let fixture: ComponentFixture<TableDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDelegadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
