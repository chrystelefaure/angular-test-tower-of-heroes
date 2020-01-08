import { TestBed } from '@angular/core/testing';

import { EvilService } from './evil.service';

describe('EvilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvilService = TestBed.get(EvilService);
    expect(service).toBeTruthy();
  });
});
