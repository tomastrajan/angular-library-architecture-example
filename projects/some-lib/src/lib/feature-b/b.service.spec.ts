import { TestBed } from '@angular/core/testing';

import { BService } from './b.service';

describe('BService', () => {
  let service: BService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
