import { TestBed } from '@angular/core/testing';

import { CustomPreloadingStrageyService } from './custom-preloading-stragey.service';

describe('CustomPreloadingStrageyService', () => {
  let service: CustomPreloadingStrageyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadingStrageyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
