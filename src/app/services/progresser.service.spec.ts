import { TestBed, inject } from '@angular/core/testing';

import { ProgresserService } from './progresser.service';

describe('ProgresserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgresserService]
    });
  });

  it('should be created', inject([ProgresserService], (service: ProgresserService) => {
    expect(service).toBeTruthy();
  }));
});
