import { TestBed } from '@angular/core/testing';

import { TestCSSService } from './test-css.service';

describe('TestCSSService', () => {
  let service: TestCSSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCSSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
