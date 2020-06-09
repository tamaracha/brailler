import { TestBed } from '@angular/core/testing';

import { BrailleService } from './braille.service';

describe('BrailleService', () => {
  let service: BrailleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrailleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
