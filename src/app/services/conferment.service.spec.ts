import { TestBed } from '@angular/core/testing';

import { ConfermentService } from './conferment.service';

describe('ConfermentService', () => {
  let service: ConfermentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfermentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
