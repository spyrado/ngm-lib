import { TestBed } from '@angular/core/testing';

import { NgmService } from './ngm.service';

describe('NgmService', () => {
  let service: NgmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
