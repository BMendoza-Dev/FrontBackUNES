import { TestBed } from '@angular/core/testing';

import { AssamblymembersService } from './assamblymembers.service';

describe('AssamblymembersService', () => {
  let service: AssamblymembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssamblymembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
