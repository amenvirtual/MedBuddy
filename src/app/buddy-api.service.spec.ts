import { TestBed } from '@angular/core/testing';

import { BuddyAPIService } from './buddy-api.service';

describe('BuddyAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuddyAPIService = TestBed.get(BuddyAPIService);
    expect(service).toBeTruthy();
  });
});
