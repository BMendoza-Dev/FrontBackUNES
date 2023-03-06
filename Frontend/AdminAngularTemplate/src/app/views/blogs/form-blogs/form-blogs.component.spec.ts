import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlogsComponent } from './form-blogs.component';

describe('FormBlogsComponent', () => {
  let component: FormBlogsComponent;
  let fixture: ComponentFixture<FormBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
