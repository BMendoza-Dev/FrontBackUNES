import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNewsAgreeComponent } from './last-news-agree.component';

describe('LastNewsAgreeComponent', () => {
  let component: LastNewsAgreeComponent;
  let fixture: ComponentFixture<LastNewsAgreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNewsAgreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastNewsAgreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
