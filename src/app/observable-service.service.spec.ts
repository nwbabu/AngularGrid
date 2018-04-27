import { TestBed, inject } from '@angular/core/testing';

import { ObservableServiceService } from './observable-service.service';

describe('ObservableServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableServiceService]
    });
  });

  it('should be created', inject([ObservableServiceService], (service: ObservableServiceService) => {
    expect(service).toBeTruthy();
  }));
});
