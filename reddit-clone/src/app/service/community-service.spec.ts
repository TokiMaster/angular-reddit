import { TestBed } from '@angular/core/testing';

import { communityService } from './community.service';

describe('CommunityService', () => {
  let service: communityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(communityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
