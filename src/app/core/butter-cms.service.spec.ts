import { TestBed } from '@angular/core/testing';

import { ButterCmsService } from './butter-cms.service';

describe('ButterCmsService', () => {
  let service: ButterCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButterCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
