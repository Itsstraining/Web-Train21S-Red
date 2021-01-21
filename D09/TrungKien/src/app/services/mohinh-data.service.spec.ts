import { TestBed } from '@angular/core/testing';

import { MohinhDataService } from './mohinh-data.service';

describe('MohinhDataService', () => {
  let service: MohinhDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MohinhDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
