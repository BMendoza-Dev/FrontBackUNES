import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditorialComponent } from './list-editorial.component';

describe('ListEditorialComponent', () => {
  let component: ListEditorialComponent;
  let fixture: ComponentFixture<ListEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
