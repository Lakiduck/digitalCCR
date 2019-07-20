import { TestBed, inject } from '@angular/core/testing';

import { ExtractinfoService } from './extractinfo.service';

describe('ExtractinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtractinfoService]
    });
  });

  it('should be created', inject([ExtractinfoService], (service: ExtractinfoService) => {
    expect(service).toBeTruthy();
  }));
});
