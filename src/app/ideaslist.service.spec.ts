import { TestBed } from '@angular/core/testing';

import { IdeaslistService } from './ideaslist.service';

describe('IdeaslistService', () => {
  let service: IdeaslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeaslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
