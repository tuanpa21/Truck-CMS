import { TestBed } from '@angular/core/testing';

import { TruckApiService } from './truck-api.service';

describe('TruckApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TruckApiService = TestBed.get(TruckApiService);
    expect(service).toBeTruthy();
  });
});
