import { TestBed } from '@angular/core/testing';

import { RetoureService } from './retoure.service';

describe('RetoureService', () => {
  let service: RetoureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetoureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
