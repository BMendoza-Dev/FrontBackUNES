import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAsamDeleComponent } from './forms-asam-dele.component';

describe('FormsAsamDeleComponent', () => {
  let component: FormsAsamDeleComponent;
  let fixture: ComponentFixture<FormsAsamDeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAsamDeleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsAsamDeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
