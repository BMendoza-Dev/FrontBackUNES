import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEditorialComponent } from './creat-editorial.component';

describe('CreatEditorialComponent', () => {
  let component: CreatEditorialComponent;
  let fixture: ComponentFixture<CreatEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatEditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
