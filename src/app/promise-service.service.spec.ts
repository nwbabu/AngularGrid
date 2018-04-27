import { TestBed, inject } from '@angular/core/testing';

import { PromiseServiceService } from './promise-service.service';

describe('PromiseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromiseServiceService]
    });
  });

  it('should be created', inject([PromiseServiceService], (service: PromiseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
