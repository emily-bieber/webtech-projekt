import { TestBed } from '@angular/core/testing';

import { RetourenService } from './retouren.service';

describe('RetourenService', () => {
  let service: RetourenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetourenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
