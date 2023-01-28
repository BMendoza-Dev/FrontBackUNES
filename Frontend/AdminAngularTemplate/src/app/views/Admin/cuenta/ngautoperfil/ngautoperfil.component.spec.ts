import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgautoperfilComponent } from './ngautoperfil.component';

describe('NgautoperfilComponent', () => {
  let component: NgautoperfilComponent;
  let fixture: ComponentFixture<NgautoperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgautoperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgautoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
