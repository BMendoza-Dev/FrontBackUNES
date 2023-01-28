import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAsambleistaComponent } from './table-asambleista.component';

describe('TableAsambleistaComponent', () => {
  let component: TableAsambleistaComponent;
  let fixture: ComponentFixture<TableAsambleistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAsambleistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAsambleistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
