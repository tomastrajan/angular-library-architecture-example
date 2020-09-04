import { TestBed } from '@angular/core/testing';

import { AService } from './a.service';

describe('AService', () => {
  let service: AService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
