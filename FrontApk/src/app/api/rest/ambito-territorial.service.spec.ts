import { TestBed } from '@angular/core/testing';

import { AmbitoTerritorialService } from './ambito-territorial.service';

describe('AmbitoTerritorialService', () => {
  let service: AmbitoTerritorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbitoTerritorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
