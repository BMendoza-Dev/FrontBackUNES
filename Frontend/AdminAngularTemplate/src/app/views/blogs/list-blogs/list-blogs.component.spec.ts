import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogsComponent } from './list-blogs.component';

describe('ListBlogsComponent', () => {
  let component: ListBlogsComponent;
  let fixture: ComponentFixture<ListBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
